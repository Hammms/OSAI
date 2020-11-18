- ### OSAI
	- ### OSAI
		- #### static
             - main.css
             - main.js
             -  worn_equipment_tab.png
		- #### templates
             - various html pages
	- #### __init__.py
	- #### forms.py
	- ####  routes.py
-	### run.py







-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


- OSAI

This folder holds all of the Information that makes up the Web Application
- static
	- main.js
		- Currently is holding all of javascript code that we produce 
	- main.css
		- Using Pure.Css as a base template and adding my shit CSS on top of it, hopefully adam will get good at css and help me
- templates
  - There are alot of index pages that are currently created, but the only thing that we are going to worry about right now is three of them.
		
	- index.html
			- The Home page currently is featuring a fully function signin attached to a MySQL Database 
			- Equipment slot editing is currently underway and expected to be done in the next week
	- sigin.html
			- Signin has the barebones look, but currently has access to creating accounts through signup.html, aswell as being able to long in and manage a user session
			- need to learn how to actually save user data and obtain it on login
	- signup.html
		- currently signup and signin look almost identical expect for one page element
		- this creates a safe way of placing a username email and password into a database, but does not have the ability to validate the email
		- the password is hashed using Bcrypt, more information needed on this topic to make sure that user information stays safe
- __init__.py
	- Init.py is the gule that calls all of the other files withing the application and arraganges that information into a runnable web server
- forms.py
	- holding all information about forms generated on the web application
- routes.py
	- holds all navigation and information for genreating each webpage + its contents

- ### run.py
	- Calls Init.py to generate the application and then use two lines of code to actually start the application
		- please note this is only for testing purpose and not how the end result of the application will be structured. 
		


	
