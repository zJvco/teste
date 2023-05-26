from flask import Flask

from .extensions import sio, cors


def create_app():
    app = Flask(__name__)
    
    app.config["SECRET_KEY"] = "0a9C57Fsd1aSD7assdCsd7DBCfas23asSDA7ABEhgdf15"
    app.config["JSON_SORT_KEYS"] = False
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["DEBUG"] = True
 
    sio.init_app(app, cors_allowed_origins="*")
    cors.init_app(app)

    from . import events

    return app