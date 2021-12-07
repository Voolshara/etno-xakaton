import sqlalchemy as sa
from sqlalchemy import  func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.sql import and_

import os
from dotenv import load_dotenv
from contextlib import contextmanager


dotenv_path = os.path.join(os.path.dirname(__file__) + '/../', '.env.local')
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)

engine = sa.create_engine(
    'postgresql://{}:{}@{}:{}/{}'.format(
        os.getenv('PG_NAME'),
        os.getenv('PG_PASSWORD'),
        os.getenv('PG_HOST'),
        os.getenv('PG_PORT'),
        os.getenv('PG_DB_NAME'),
    )
)
Session = sessionmaker(bind=engine)
Base = declarative_base()

@contextmanager
def create_session(**kwargs):
    new_session = Session(**kwargs)
    try:
        yield new_session
        new_session.commit()
    except Exception:
        new_session.rollback()
        raise
    finally:
        new_session.close()


class Cards(Base):
    __tablename__ = 'cards'
    id = sa.Column(sa.Integer, primary_key=True)
    label = sa.Column(sa.String())
    full_text = sa.Column(sa.String())
    img = sa.Column(sa.String())
    link = sa.Column(sa.String())


class Articles(Base):
    __tablename__ = 'articles'
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String())
    router = sa.Column(sa.String(), unique=True)
    redirect = sa.Column(sa.Integer, default=0)


class Cards_Bind(Base):
    __tablename__ = 'cards_bind'
    id = sa.Column(sa.Integer, primary_key=True)
    article_id = sa.Column(sa.Integer, sa.ForeignKey(Articles.id))
    card_id = sa.Column(sa.Integer, sa.ForeignKey(Cards.id))
    serial_number = sa.Column(sa.Integer)
    type = sa.Column(sa.String())


class DB_get:
    def get_data_for_article(self, router):
        with create_session() as session:
            id_article = session.query(Articles).filter(
                    Articles.router == router).one_or_none()
            all_cards = session.query(Cards_Bind).filter(
                Cards_Bind.article_id == id_article.id
            ).all()
            cards_data = []
            for card in all_cards:
                this_card_data = session.query(Cards).filter(
                    Cards.id == card.card_id).one_or_none()
                if this_card_data is None:
                    continue
                cards_data.append({
                    "serial_number" : card.serial_number,
                    "type" : card.type,
                    "label": this_card_data.label,
                    "full_text" : this_card_data.full_text,
                    "img" : this_card_data.img,
                    "link" : this_card_data.link,
                })
            return cards_data

class DB_new:
    def __init__(self) -> None:
        pass

    def bind_card(self, id_article, id_card, type="simple-card"):
        with create_session() as session:
            serial_number = len(session.query(Cards_Bind).filter(
                Cards_Bind.article_id == id_article).all()) + 1
            session.add(Cards_Bind(
                article_id = id_article,
                card_id = id_card,
                serial_number = serial_number,
                type = type,
            ))

    def add_new_card_to_article(self, router, label, full_text, img, link, type):
        with create_session() as session:
            id_article = session.query(Articles).filter(
                Articles.router == router).one_or_none()
            if id_article is None:
                print(f"[ROUTER {router} NOT FOUND]")
                return
            id_article = id_article.id
            id_card = self.crete_new_card(
                label, full_text, img, link
            )
            self.bind_card(id_article, id_card, type)

    def crete_new_card(self, label, full_text, img, link):
        with create_session() as session:
            session.add(Cards(
                label=label,
                full_text=full_text,
                img=img,
                link=link
            ))
            return session.query(Cards).filter(and_(
                Cards.full_text == full_text),
                Cards.label == label, 
                Cards.img == img,
                Cards.link == link
                ).first().id

    def create_new_article(self, name, router):
        with create_session() as session:
            session.add(Articles(
                name = name,
                router = router,
            ))

    def create_all_tables(self):
        Base.metadata.create_all(engine)

DBN = DB_new()
# DBN.create_all_tables()
# DBN.create_new_article("Нижний Новгород", "/nizhny")
# DBN.add_new_card_to_article(
#     "/nizhny",
#     "Hi", 
#     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque velit esse fugiat aperiam possimus nostrum id excepturi eaque a inventore assumenda voluptate eum quam, beatae animi enim cupiditate maxime reiciendis ex distinctio earum placeat ut perspiciatis. Enim vitae facere corrupti repudiandae rem esse qui ea sit magni, ullam dolore.",
#     "/img/horse.jpg",
#     "",
#     "left-img"
#     )