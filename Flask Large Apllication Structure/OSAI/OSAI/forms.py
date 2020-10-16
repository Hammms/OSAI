from flask_wtf import FlaskForm
from wtforms import StringField, validators, Form, PasswordField, SubmitField, ValidationError
from wtforms.fields.html5 import EmailField
from OSAI import db, User
#need to import db object

class LoginForm(FlaskForm):
    email = EmailField('email', [
            validators.InputRequired(),
            validators.Email()
        ])
    username = StringField('username', [validators.InputRequired()])
    password = StringField('password', [validators.input_required()])
    submit = SubmitField('Login')


