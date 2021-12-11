from flask import Flask, request
from typer import Typer 
from flask_cors import CORS
from src.db import DB_get, DB_write

app = Flask(__name__)
CORS(app, resources={
    r"/article_data*": {"origins": "*"},
    }) # настройка CORS POLICY
app.config['CORS_HEADERS'] = 'Access-Control-Allow-Origin'

DBG = DB_get()
DBW = DB_write()
runner = Typer()

@app.route('/article_data', methods=['POST'])  # роут сборки шаблонов
def arcticle():
    data = DBG.get_data_for_article("/" + request.json['router'])
    if data is None:
        return {
            "meta" : {
                "status" : "error"
            }
        }
    data["meta"] = {"len" : len(data["parts"])}
    return data


@app.route('/get_articles', methods=['POST'])  # роут сборки шаблонов
def get_articles():
    return DBG.popular_articles()


@app.route('/new_redirect', methods=['POST'])  # роут сборки шаблонов
def new_redirect():
    DBW.add_redirect("/" + request.json['router'])
    return {
        "meta" : {
            "status" : "good"
        }
    }

@runner.command()
def runner():
    app.run(host="localhost", port="4600") # запуск сервераp