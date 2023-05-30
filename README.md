# This project is an example of automation unit, api and ui on JS using TS.

&nbsp; For Unit tests I'm using mocha, chai and checking the code inside app folder.
&nbsp; For API tests - mocha, chai and axios and edpoint for checking https://jsonplaceholder.typicode.com/
&nbsp; UI tests are based on Web Driver IO with Mocha and Chai expectations. https://ej2.syncfusion.com/showcase/angular/appointmentplanner/
&nbsp; Tests reports are allure and mochawesome

The project contains:

&nbsp; ├── ...
&nbsp; ├── api                     
&nbsp; │   └── config            # Configuration folder that contains settings for runnung api
&nbsp; │   │   └── data          # Test data for API 
&nbsp; │   ├── helper            # The helper which handles parsing a request 
&nbsp; │   └── specs             # Test files folder for API checks  
&nbsp; └── app                   # Code as an example app for unit testing
&nbsp; │       
&nbsp; └── src                   # The main folder for UI checks
&nbsp; │   ├── config            # WDIO configuration folder
&nbsp; │   ├── po                
&nbsp; │   │   ├── components    # Page Objects components      
&nbsp; │   │   └── pages         # The app pages 
&nbsp; │   └── tests             # Test files folder for UI checks   
&nbsp; │   
&nbsp; └── unit                  # Test files folder for UNIT checks  



How to run the project:

Clone the ropository and run npm i

run unit tests: npm run unit
run api tests: npm run api
run UI tests: npm run wdio

