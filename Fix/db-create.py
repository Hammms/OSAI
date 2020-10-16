# from sqlalchemy import (MetaData, Table, Column, Integer, Numeric, String, DateTime, ForeignKey, create_engine) 

# metadata = MetaData()

# users = Table('users', metadata, 
#             Column('id', Integer(), primary_key=True, autoincrement=True),
#             Column('email', String(64), nullable=False, unique=True),
#             Column('username', String(24), nullable=False, unique=True),
#             Column('Password', String(128), nullable=False)
# )

from flask_sqlalchemy import SQLAlchemy
from flask import Flask 

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Test@@1234@localhost/testing'
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    def __repr__(self):
        return '<User %r>' % self.username
    
db.create_all()


# this is code from my failed attempts at trying to connect and run information into a database


#from sqlalchemy import create_engine

#engine = create_engine('mysql+pymysql://root:Test@@1234@localhost/testing', pool_recycle=3600)
#connection = engine.connect()
#create flask and flask-login instance 