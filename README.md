## What is OSRSAI?

OSRSAI or Old School Artificial Intelligence is a project of mine that sprouted based off of my love for coding and Oldschool Runescape.

OSRSAI's goal is an attempt to bring artificial Intelligence into Old School Runescape to predict what type of gear is needed for each monster in Runescape. This project was made to train and test my skills with web-based programming as well as AI-based programming.

OSRSAI is built using flask to support the website infrastructure and React to service the User.
However the Algorithm that will be built is still a work in progress i am expecting to use scikit learn and other python packages such as tensorflow.

Current Scope:

- [x] User Authentication (Signin/signout/sessionManagement),
- [X] Interfacing with OsrsDB to obtain Runescape data see: (https://github.com/osrsbox/osrsbox-db),
- [X] Referencing Jinja2 rednered code to create dynamic pages based off of a template,
- [X] Hashing User Passwords,
- [X] Creating a Base CSS template to visualize and understand website layout (Used PureCSS and some custom code),
- [X] Reading and wrtiting to a MYSQL database to store user login information securely with Passwords encrypted,
- [X] UI Design template,
- [X] Generating a Dynamic Searchbar for selecting weapon equipment 
- [X] Create a database Init Script incase you ever break your DB
- [X] Ability to change items within the equipment panel 
- [X] Understand Git to manage version control 
- [X] Move projects into a structure that can more easily implement into a large application structure
- [ ] UX Design Template
- [ ] User Navigation,
- [ ] AI Algorithm,
- [ ] Displaying item statistics,
- [ ] Determine how you are going to manage the OSRSDB Data for the algorithm 
- [ ] understanding interfacing between flask and React (Currently backend and frontend are in two different branches)
- [ ] make equipment items focusable
- [ ] switch items in pane when searchbar item is selected
- [ ] Dynamiclly switch the search bar contents when a different item in the equipment pane is focused 
      
      
## Requirements:

### Backend
flask
flask_login
flask_sqlalchemy
flask_wtf
flask_bcrypt
wtforms[email]
pylint
pymysql
osrsbox
cryptography

### Frontend
Npm
Nodejs
Create-react-app
react-scripts
