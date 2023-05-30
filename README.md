# This project is an example of automation unit, api and ui on JS using TS.

&nbsp; For Unit tests I'm using mocha, chai and checking the code inside app folder.
&nbsp; For API tests - mocha, chai and axios and edpoint for checking https://jsonplaceholder.typicode.com/
&nbsp; UI tests are based on Web Driver IO with Mocha and Chai expectations. https://ej2.syncfusion.com/showcase/angular/appointmentplanner/
&nbsp; Tests reports are allure and mochawesome

The project contains:

- ├── ...
- ├── api                     
- │   └── config            # Configuration folder that contains settings for runnung api
- │   │   └── data          # Test data for API 
- │   ├── helper            # The helper which handles parsing a request 
- │   └── specs             # Test files folder for API checks  
- └── app                   # Code as an example app for unit testing
- │       
- └── src                   # The main folder for UI checks
- │   ├── config            # WDIO configuration folder
- │   ├── po                
- │   │   ├── components    # Page Objects components      
- │   │   └── pages         # The app pages 
- │   └── tests             # Test files folder for UI checks   
- │   
- └── unit                  # Test files folder for UNIT checks  



How to run the project:

Clone the ropository and run `npm i`

run unit tests: `npm run unit`
run api tests: `npm run api`
run UI tests: `npm run wdio`

