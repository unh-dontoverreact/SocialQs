# SocialQs (Social Cues)  
A social notification app for keeping track of who and what is most important  
  
## Description  
  
| Are you challenged with... | Let SocialQs help...  |  
| ----------------- | ------------------------------ |  
| Remembering important dates? | Track connections even if they're not online |  
| Keeping up with your family or friends? | See a timeline of important events |  
| Finding a reason to reach out and start conversation? | Get "cues" when an important event is coming up |   
| Recalling the names of people and their pets? | Set reminders to connect with someone |  
  
SocialQs is a contact management application designed as social aid in the 21st century social networking culture.  Use SocialQs 
to keep track of important people in your life:  friends, family, co-workers and even pets.  In a hyper-connected world, it can be 
challenging to keep an eye on those important details:  birthdates, anniversaries, acquaintances, their family and their hobbies.
  
Use SocialQs as a personal databse to file away all of those important people,  register important dates and events and have the application give you some advanced notice when you need to reach out.   

## Application Features    
__1. Contact Management__  
- Add, Edit and Delete contacts  
- Record names, addresses, dates, categories, hobbies, and general information  
- Search by name, categories and other filters   

__2. Event Management__  
- Add, update and delete important dates  
- Set recurring events   
- Assign events to contacts  
- Mark important events for reminder notices  

__3. Cue Notifications__
- Get in-app notifications based on contact dates
- Get in-app notifications based on tagged events
- Set interval of notifications  

## Getting Started  
1. Browse to https://socialqs.herokuapp.com/  
2. Create a user using an email address and password  
3. Login in to the app   
4. Add contacts  
5. Add events  
6. Notifications will appear automatically as they occur  

## Prerequisites
- A modern browser,  best in Chrome   

## Installing
1. Download and install the latest version of Node.js following the website instructions for your platform  
   ` https://nodejs.org/en/download/`   
2. Clone this repository into a clean diretory  
   `$ git clone <repository url>`  
3. Bring down the latest package dependencies using node package manager  
   `npm install`  
4. Use Node to start the application and load the browser at http://localhost:3000  
   `npm start`    

## Developer Notes  
dotenv  requires a cookie session key to obscure the login credentials  
Include the following line in a .env file of the project root folder:  
COOKIE_SESSION_KEY="any-unique-lettters-here"  

## API Endpoints
  
__User Endpoints:__
    
|HTTP Action | Endpoint |  Parms | Input | Output | Description |  
| ---------- | -------- | ------ | ----- | ------ | ----------- |  
| GET        | /api/user/ | None         | n/a | JSON [] | Get all users with their populated contacts & events  |  
| POST       | /api/user/     | n/a | JSON  |  | adds a passed user/contact/events to the database   |  
| UPDATE     | /api/user/:id | id | n/a | | updates specified user to the database|  
| DELETE     | /api/user/:id | id | n/a | number deleted |  deletes the specified user from the database based on id |  
  
__Contact Endpoints:__ 
   
|HTTP Action | Endpoint |  Parms | Input | Output | Description |  
| ---------- | -------- | ------ | ----- | ------ | ----------- |  
| GET        | /api/contact/ | None         | n/a | JSON [] | Get all contacts from the database  |  
| POST       | /api/contact/     | n/a | JSON  |  | adds a passed contact to the database   |  
| UPDATE     | /api/contact/:id | id | n/a | | updates specified contact in the database|  
| DELETE     | /api/contact /:id | id | n/a | number deleted |  deletes the specified contact from the database based on id |  
  
__Scheduler Endpoints:__  
  
|HTTP Action | Endpoint |  Parms | Input | Output | Description |  
| ---------- | -------- | ------ | ----- | ------ | ----------- |  
  
__Auth Endpoints:__  
  
|HTTP Action | Endpoint |  Parms | Input | Output | Description |  
| ---------- | -------- | ------ | ----- | ------ | ----------- |  
  
## Technology Used  
    
| Package/Interface | Version     | Description                                                              |  
| ----------------- | ----------- | ------------------------------------------------------------------------ |  
| Axios             | __0.18.0__  | Allows for client based http request                                     |   
| React.js          | __16.8.1__  | Main javascript engine for this application                              |  
| Express           | __4.16.3__  | The workhorse web server provider                                        |  
| Mongoose          | __5.4.13__  | Package to conifgure schemas and interface with MongoDB                  |  
| Node              |             | Ubiquitous javascript engine                                             |  
| Dotenv            | __6.2.0__   | Package used to keep private keys out of Git                             |  
| if-env            | __1.0.4__   | Package used simplify startup scripts basd on environments               |  
| babel-eslint      | __10.0.1__  | Coding standards management library                                      |  
| react-dom         | __16.6.3__  | React framework to enable dynamic UI features                            |  
| node-schedule     | __1.3.2__   | Cron based in-session scheduler for notifications                        |  
| bcryptjs          | __2.4.3__   | Password hashing library                                                 |  
| materialize-css   | __1.0.0__   | Material designed based framework for extra screen sugar                 |  
| moment            | __2.24.0__  | Date/Time management library                                             |  
| passport          | __0.4.0__   | Login / authentication library                                           |  
| prettier          | __1.16.4__  | Lint engine for re-writing / formatting code                             |  
| styled-components | __4.1.3__   | CSS library built for inline components                                  |  

## Future Enhancements
More than just noting the details,  SocialQs will be able to help you engage with more meaningful conversations with the FORD method.  The
application will cue messagse based on Family, Occupation, Recreation and Dreams to help prompt a dialog.  The app can store the bits of knowledge track those pieces that are most important to remember.
  
## Built With
React
Express
Node
Mongo
Heroku
   
## Authors  
Team - Don't (over) React  
March, 2019  
- Cheyra Dickinson  
- Felicia Wager   
- Laurie Anderson    
- Mark Loughran  
- Michael Galarneau  
  
## Acknowledgements
UNH Bootcamp & Trilogy Education  