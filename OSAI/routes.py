#############################################################################

#  This page holds all of the routes and functions preformed on the tempaltes

#############################################################################
from flask import redirect, render_template, request
from flask_wtf import FlaskForm
from wtforms import StringField, validators, Form, PasswordField, SubmitField, ValidationError
from wtforms.validators import DataRequired, Length, Email, EqualTo, email
from wtforms.fields.html5 import EmailField
from OSAI import app, items, User, bcrypt, login_manager, db
from flask_login import login_user, current_user, logout_user
from OSAI.forms import LoginForm



@app.route('/')
def index():
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


# this is going to be routes for backend functions 

@app.route('/testing')
def testing():
   print('i have executed a python function through an image on a webpage')
   return None