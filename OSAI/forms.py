#############################################################################

#  This page holds all of the forms on the webpage

#############################################################################
from flask_wtf import FlaskForm
from wtforms import StringField, validators, Form, PasswordField, SubmitField, ValidationError
from wtforms.fields.html5 import EmailField
from OSAI import db, User


class LoginForm(FlaskForm):
    email = EmailField('email', [
            validators.InputRequired(),
            validators.Email()
        ])
    username = StringField('username', [validators.InputRequired()])
    password = StringField('password', [validators.input_required()])
    submit = SubmitField('Login')


