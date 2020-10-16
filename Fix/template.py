#import what is needed
from flask import Flask, redirect, render_template, request
from flask_wtf import FlaskForm
from wtforms import StringField, validators, Form, PasswordField, SubmitField, ValidationError
from wtforms.validators import DataRequired, Length, Email, EqualTo, email
from flask_login import LoginManager, UserMixin, login_user, current_user, logout_user
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from wtforms.fields.html5 import EmailField
from osrsbox import items_api
app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Test@@1234@localhost/testing'
db = SQLAlchemy(app)
login_manager = LoginManager(app)
bcrypt = Bcrypt(app)
items = items_api.load()


class LoginForm(FlaskForm):
    email = EmailField('email', [
            validators.InputRequired(),
            validators.Email()
        ])
    username = StringField('username', [validators.InputRequired()])
    password = StringField('password', [validators.input_required()])
    submit = SubmitField('Login')

    def validate_username(self, username):
        user = User.query.filter_by(username=username.data).first()
        if user:
            print('THIS SHIT IS FUCKING BROKENNNNNNNNNNNNNNNNNNNNN') #remove this at some point
            raise ValidationError('this username is already taken please choose something else')

    def validate_email(self, email):
        email = User.query.filter_by(email=email.data).first()
        if email:
            print('THIS SHIT IS FUCKING BROKENNNNNNNNNNNNNNNNNNNNN') #remove this at some point
            raise ValidationError('this email is already taken please choose something else')

#create part of the schema of your database
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    
    def __init__(self, email, username, password):
      self.email = email
      self.username = username
      self.password = password

    def __repr__(self):
        return '<User %r>' % self.username



#website content data is placed here

#create a form through jinja

#Website naviagation and events are placed here
@app.route('/')
def index():
    #for looping all of the helemts in the game 
    image = items.lookup_by_item_name('Toxic Blowpipe').icon
    return render_template('index.html', image=image)

@app.route('/signup', methods = ['GET', 'POST'])
def signup():
    form = LoginForm()
    if request.method == 'POST':
        print('post and validation of form is sucessful')
        hashed_pw = bcrypt.generate_password_hash(request.form['password']).decode('utf-8')
        user = User(request.form['email'], request.form['username'],   hashed_pw)
        print(user.username)
        print(user.email)
        existing_user = User.query.filter(User.username == user.username or User.email == user.email).first()
        print(existing_user)
        if existing_user == None:
            db.session.add(user)
            db.session.commit()
            print(user.password)
            return redirect('/')
        if existing_user.username == user.username or existing_user.email == user.email:
            return (' Username or Password has already been created')
        
    return render_template('signup.html', form=form)
        
    
@app.route('/about')
def about():
    return render_template('about.html')


@app.route('/signin', methods = ['GET', 'POST'])
def signin():
    if current_user.is_authenticated:
        return redirect('/')
    form = LoginForm()
    if request.method == 'POST':
        #grab the input of the user
        user = User.query.filter_by(username=request.form['username']).first()
        print(user)
        if user and bcrypt.check_password_hash(user.password, request.form['password']):
            login_user(user)
            print('sucessful login')
            return redirect('/')
        #grab 
        return redirect('/signup')
    return render_template('signin.html', form=form)


#loading a user
#going to need four inputs isAuthenticed, isActive, isAnonymous, GetID 
@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))

@app.route('/logout')
def logout():
    logout_user()
    return redirect('/')

@app.context_processor
def testing():
   print('i have executed a python function through an image on a webpage')
   return dict(testing = 'testing')


if(__name__) == "__main__":
    app.run(debug=True)