from flask import Flask, request
from typer import Typer 
from flask_cors import CORS
from src.db import DB_get

app = Flask(__name__)
CORS(app, resources={
    r"/arcticle_data*": {"origins": "*"},
    }) # настройка CORS POLICY
app.config['CORS_HEADERS'] = 'Access-Control-Allow-Origin'

DBG = DB_get()
runner = Typer()

@app.route('/arcticle_data', methods=['POST'])  # роут сборки шаблонов
def filters():
    data = DBG.get_data_for_article("/" + request.json['router'])
    if data is None:
        return {
            "meta" : {
                "status" : "error"
            }
            }
    return {
    "meta": {
        "len" : len(data),
        "status" : "OK"
    },
    "data":data
    }

@runner.command()
def runner():
    app.run(host="localhost", port="4600") # запуск сервера