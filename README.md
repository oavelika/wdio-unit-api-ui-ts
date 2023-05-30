# This project is an example of automation unit, API and UI on JS using TS.

+ For Unit tests I'm using mocha, chai to check the code inside the app folder.
+ For API tests I'm using mocha, chai, axios, and edpoint for checking https://jsonplaceholder.typicode.com/
+ UI tests are based on Web Driver IO with mocha and chai expectations. See https://ej2.syncfusion.com/showcase/angular/appointmentplanner/
+ I'm using allure and mochawesome for tests reports. 

+ The project contains:

```
 ├── ...
 ├── api                     
 │   └── config            # Configuration folder that contains settings for running API tests
 │   │   └── data          # Test data for API 
 │   ├── helper            # The helper which handles parsing data 
 │   └── specs             # Test files folder for API checks  
 └── app                   # Code used as an example for unit testing
 │       
 └── src                   # The main folder for UI
 │   ├── config            # WDIO configuration folder
 │   ├── po                
 │   │   ├── components    # Page Objects components      
 │   │   └── pages         # The app pages 
 │   └── tests             # Test files folder for UI checks
 │   
 └── unit                  # Test files folder for UNIT checks
```


+ How to run the project:

+ Clone the ropository and run **`npm i`**

+ run unit tests: **`npm run unit`**
+ run api tests: **`npm run api`**
+ run UI tests: **`npm run wdio`**

