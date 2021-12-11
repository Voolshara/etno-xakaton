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

class Authors(Base):
    __tablename__ = 'authors'
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String(), unique=True)
    instagram = sa.Column(sa.String())
    vk = sa.Column(sa.String())
    photo = sa.Column(sa.String())


class Articles(Base):
    __tablename__ = 'articles'
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String())
    description = sa.Column(sa.String())
    img = sa.Column(sa.String())
    router = sa.Column(sa.String(), unique=True)
    redirect = sa.Column(sa.Integer, default=0)
    gerb_img = sa.Column(sa.String())
    bg_img = sa.Column(sa.String())


class Longrid_Parts(Base):
    __tablename__ = 'longrid_part'
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String())
    description = sa.Column(sa.String())
    label = sa.Column(sa.String())
    full_text = sa.Column(sa.ARRAY(sa.String()))
    author_id = sa.Column(sa.Integer, sa.ForeignKey(Authors.id))
    img_h1 = sa.Column(sa.ARRAY(sa.String()))
    img_h2 = sa.Column(sa.ARRAY(sa.String()))
    img_h3 = sa.Column(sa.ARRAY(sa.String()))
    videos = sa.Column(sa.ARRAY(sa.String()))


class Longrid_Bind(Base):
    __tablename__ = 'longrid_binds'
    id = sa.Column(sa.Integer, primary_key=True)
    article_id = sa.Column(sa.Integer, sa.ForeignKey(Articles.id))
    longrid_part_id = sa.Column(sa.Integer, sa.ForeignKey(Longrid_Parts.id))
    serial_number = sa.Column(sa.Integer)
 

class Cards(Base):
    __tablename__ = 'cards'
    id = sa.Column(sa.Integer, primary_key=True)
    label = sa.Column(sa.String())
    full_text = sa.Column(sa.ARRAY(sa.String()))
    img = sa.Column(sa.String())
    link = sa.Column(sa.String())
    author_id = sa.Column(sa.Integer(), sa.ForeignKey(Authors.id))


class Cards_Bind(Base):
    __tablename__ = 'card_binds'
    id = sa.Column(sa.Integer, primary_key=True)
    longrid_part_id = sa.Column(sa.Integer, sa.ForeignKey(Longrid_Parts.id))
    card_id = sa.Column(sa.Integer, sa.ForeignKey(Cards.id))
    type = sa.Column(sa.String())


class DB_write:
    def add_redirect(self, router):
        with create_session() as session:
            session.query(Articles).filter(Articles.router == router).update({
                "redirect" : Articles.redirect + 1
            })

class DB_get:
    def popular_articles(self):
        with create_session() as session:
            data = session.query(Articles).order_by(Articles.redirect).all()
            data.reverse()
            return {"data" : [[el.name, el.description, el.img, el.router] for el in data]}

    def get_data_for_article(self, router):
        with create_session() as session:
            article = session.query(Articles).filter(Articles.router == router).one_or_none()
            if article is None:
                print(f"[ROUTER] {router} NOT FOUND")
                return None
            ARTICLE_INFORMATION = {}
            ARTICLE_INFORMATION["name"] = article.name
            ARTICLE_INFORMATION["desc"] = article.description
            ARTICLE_INFORMATION["img"] = {
                "gerb" : article.gerb_img,
                "bg" : article.bg_img,
            }
            parts_data = []
            bind_longrid = session.query(Longrid_Bind).filter(
                Longrid_Bind.article_id == article.id
            ).all()
            if bind_longrid is None:
                print(f"[BIND] {router} NOT FOUND")
                return None
            for element in bind_longrid:
                longrid_part_id = element.longrid_part_id
                longrid_part = session.query(Longrid_Parts).filter(
                    Longrid_Parts.id == longrid_part_id).one_or_none()
                if longrid_part is None:
                    continue
                author = session.query(Authors).filter(
                    Authors.id == longrid_part.author_id).one_or_none()
                if author is None:
                    print(f"[AUTHOR] {router, element.id, longrid_part.id} NOT FOUND")
                    author_dict = None
                else:
                    author_dict = {
                        "name" : author.name,
                        "instagram" : author.instagram,
                        "photo" : author.photo,
                    }

                card_data = []
                bind_cards = session.query(Cards_Bind).filter(
                    Cards_Bind.longrid_part_id == longrid_part.id 
                ).all()
                if bind_cards is None:
                    print(f"[BIND CARD] {router, element.id} NOT FOUND")
                    parts_data.append({
                        "name" : longrid_part.name,
                        "desc" : longrid_part.description,
                        "label" : longrid_part.label,
                        "full_text" : longrid_part.full_text,
                        "img" : {"H1": longrid_part.img_h1, "H2": longrid_part.img_h2, "H3": longrid_part.img_h3},
                        "author" : author_dict,
                        "cards" : None
                    })
                    continue
                for card in bind_cards:
                    card_info = session.query(Cards).filter(
                        Cards.id == card.id).one_or_none()
                    if card_info is None:
                        print(f"[CARD] {router, element.id, card.id} NOT FOUND")
                        continue
                    author = session.query(Authors).filter(
                    Authors.id == card_info.author_id).one_or_none()
                    if author is None:
                        print(f"[AUTHOR] {router, element.id, card.id} NOT FOUND")
                        card_data.append(
                        {
                            "label" : card_info.label,
                            "full_text" : card_info.full_text,
                            "img" : card_info.img,
                            "type" : card.type,
                            "author" : None
                        }
                        )
                        continue
                    card_data.append(
                        {
                            "label" : card_info.label,
                            "full_text" : card_info.full_text,
                            "img" : card_info.img,
                            "type" : card.type,
                            "author" : {
                                "name" : author.name,
                                "instagram" : author.instagram,
                                "photo" : author.photo,
                            }
                        }
                    )
                parts_data.append({
                        "name" : longrid_part.name,
                        "desc" : longrid_part.description,
                        "label" : longrid_part.label,
                        "full_text" : longrid_part.full_text,
                        "img" : {"H1": longrid_part.img_h1, "H2": longrid_part.img_h2, "H3": longrid_part.img_h3},
                        "author" : author_dict,
                        "cards" : card_data
                    })
            ARTICLE_INFORMATION["parts"] = parts_data
            return ARTICLE_INFORMATION


    def get_author(self, name):
        with create_session() as session:
            author = session.query(Authors).filter(
                    Authors.name == name).one_or_none()
            if author is None:
                return None, None
            return author.id, author.name, author.instagram, author.vk, author.photo

class DB_new:
    def __init__(self) -> None:
        self.DBS = DB_get()

    def write_img_to_article(self, router, gerb, bg):
        with create_session() as session:
            id_article = session.query(Articles).filter(
                Articles.router == router).one_or_none()
            if id_article is None:
                return
            id_article = id_article.id
            session.query(Articles).filter(Articles.id == id_article).update({Articles.gerb_img: gerb, Articles.bg_img: bg})

#_____________________________________________edit data_____________________________________

    def create_new_author(self, name, instagram, vk, photo):
        with create_session() as session:
            session.add(Authors(
                name=name,
                instagram=instagram,
                vk=vk,
                photo=photo,
            ))

    def add_new_card_to_longrid(self, longrid_part_id, label, full_text, img, link, type, author_name):
        with create_session() as session:
            if author_name is None:
                author_id = None
            else:
                author_id, *other_data = self.DBS.get_author(author_name)
                if author_id is None:
                    self.create_new_author(author_name, "", "", "")
                author_id, *other_data = self.DBS.get_author(author_name)
            id_card = self.crete_new_card(
                label, full_text, img, link, author_id
            )
            session.add(Cards_Bind(
                longrid_part_id = longrid_part_id,
                card_id = id_card,
                type = type,
            ))
            
    def crete_new_card(self, label, full_text, img, link, author_id):
        with create_session() as session:
            session.add(Cards(
                label=label,
                full_text=full_text,
                img=img,
                link=link,
                author_id=author_id
            ))
            return session.query(Cards).filter(and_(
                Cards.full_text == full_text),
                Cards.label == label, 
                Cards.img == img,
                Cards.link == link,
                Cards.author_id == author_id
                ).first().id

# _________________________________________________________________________________________________________________

    def crete_new_longrid_element(self, name, desc, label, full_text_arr, author_id, img_h1 = [], img_h2 = [], img_h3 = []):
        with create_session() as session:
            session.add(Longrid_Parts(
                name=name,
                description=desc,
                label=label,
                full_text=full_text_arr,
                author_id=author_id,
                img_h1 = img_h1,
                img_h2 = img_h2,
                img_h3 = img_h3,
                videos = [],
            ))
            return session.query(Longrid_Parts).filter(and_(
                Longrid_Parts.name == name,
                Longrid_Parts.description == desc,
                Longrid_Parts.author_id == author_id
            )).first().id

    def bind_longrid_part(self, id_article, longrid_part_id):
        with create_session() as session:
            serial_number = len(session.query(Longrid_Bind).filter(
                Longrid_Bind.article_id == id_article).all()) + 1
            session.add(Longrid_Bind(
                article_id = id_article,
                longrid_part_id = longrid_part_id,
                serial_number = serial_number,
            ))

    def add_new_longrid_part(self, router, name, desc, label, full_text, author_name, img_h1 = [""], img_h2 = [""], img_h3 = [""]):
        with create_session() as session:
            if author_name is None:
                author_id = None
            else:
                author_id, *other_data = self.DBS.get_author(author_name)
                if author_id is None:
                    self.create_new_author(author_name, "", "", "")
                author_id, *other_data = self.DBS.get_author(author_name)
            longrid_part = self.crete_new_longrid_element(name, desc, label, full_text, author_id, img_h1, img_h2, img_h3)
            id_article = session.query(Articles).filter(
                Articles.router == router).one_or_none()
            if id_article is None:
                print(f"[ROUTER {router} NOT FOUND]")
                return
            id_article = id_article.id
            self.bind_longrid_part(id_article, longrid_part)

    def create_new_article(self, name, router):
        with create_session() as session:
            session.add(Articles(
                name = name,
                description = "",
                img = "",
                router = router,
                gerb_img = "",
                bg_img = ""
            ))
            session.query(Articles).filter(Articles.router == router).one()


    def create_all_tables(self):
        Base.metadata.create_all(engine)


# DBN = DB_new()
# DBG = DB_get()
# #DBN.create_all_tables()
# # DBN.create_new_article("Нижний Новгород", "/nizhny")
# # DBN.create_new_article("Казань", "/kazan")
# # DBN.write_img_to_article("/nizhny", "/img/nizhny-gerb.png", "/img/nizhny-pre.jpeg")
# #DBN.write_img_to_article("/kazan", "/img/kazan-gerb.png", "/img/kazan-pre.jpg")
# DBN.add_new_longrid_part("/kazan", "TEST", "", "О школе", ["Первый парараграф", "Второй параграф"], "Кадилов Михуил")
# # DBN.add_new_card_to_longrid(1, "Максим", ["Первый абзац", "Второй абзац"], "", "", "simple-card", "Кадилов Михуил")
# # DBN.write_img_to_article("/kazan", "/img/nizhny-gerb.png", "/img/nizhny-pre.jpeg")

# # DBN.add_new_longrid_part("/kazan", "kazan", "", "Первое впечатление", ["Наша дружная группа вновь отправилась в экспедицию, чтобы с головой окунуться в проект ЭТНО-хакатон. На этот раз мы прибыли в Казань – столицу Татарстана. Даже с окна автобуса видно, что город чистый и опрятный, а дороги ровные и широкие.", "Микрорайон, где мы высадились из автобуса, называется «Седьмое небо». Наверное, потому, что вокруг стоят небоскрёбы. У нас в Чебоксарах дома выше 10 этажей – редкость, в Казани же это необходимо. В городе проживает около миллиона человек.",
# # "Несмотря на различия в демографии, город чем-то да похож на Нижний Новгород и Чебоксары. Главное различие, которое приметили все, даже педагоги – отсутствие ИКЕА в Чебоксарах."], "Команда Этно-Хакатона")
# # DBN.add_new_longrid_part("/kazan", "kazan", "", "Знакомство со школой", ["Центр жилого массива – многопрофильная школа № 181. Нас гостеприимно встречают директор, учителя, дети, одетые в национальные костюмы. Школа уютная, красиво оформленная, глаза разбегаются.",
# # "Через несколько минут мы отправимся по коридорам и мастерским. А пока нас просто захватывает танец «Дружба народов». Мелодии сменяют друг друга, девушки в национальных костюмах народов Поволжья парами выходят вперед и исполняют знакомые движения.", "Данное выступление оставило прекрасное впечатление и осталось в наших сердцах надолго. В ходе интервью у одной из учениц, оказалось, что данное выступление ежегодно показывают в стенах этой школы во время фестиваля, когда каждый класс представляет свою, выбранную жеребьевкой, страну. Фестиваль народов в школе №181 - это уже традиция.",
# # "После выступления, на одном из мастер-классов по изготовлению калфаков, преподаватели разговаривали на татарском языке. Очень интересно было слушать татарскую речь, так как она отличается от привычной нам чувашской. Калфак – традиционный женский головной убор в Татарстане, удивительно было узнать, что делается он достаточно легко!",
# # "Потом мы весело выкладываем собственные имена на русском и английском языках с помощью…матрёшек и тюльпанов. Такая уникальная азбука – ручная работа ребят и педагогов. К ручному труду в казанской школе, как мы заметили, особо трепетное отношение.",
# # "Помимо мастер-класса по калфакам, нам показали процесс создания деревянных значков с эмблемой школы, и как рисовать элементы татарских орнаментов. В целом и общем, нас полностью одарили и духовно, и физически, ведь мы унесли на память сделанные собственными руками сувениры."], "Команда Этно-Хакатона")
# print(DBG.get_data_for_article('/kazan'))
print('[DB CREATOR] Succeful')