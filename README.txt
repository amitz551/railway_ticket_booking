----Steps to Deploy----


##Run the program

TRAIN_TICKET/train_booking/services   =>  node index.js   (To run backend)
TRAIN_TICKET/train_booking/web   =>  npm start      (To run frontend)



1) creating the database

	- create .env file inside services and add MONGO_URI
	
	- The application require mongoDB as the database
	
	- Run the mongoDB and execute the code in "db-script.txt". (copy the content and paste to mongo.exe cmd)
	
	- database name should be "railway" and database creation is also included in "db-script.txt"		



2) deploy back-end services
	
	- go inside services folder
	
	- run "npm install" using cmd
	
	- after installing node modules, edit the "config.json" file if your configurations are different. 
	  
	  (eg: if you have the database in seperate server, change the database config in the config.json file) more details available in the report.
	
	- then execute the command, "node index.js"
	
	- then the back-end services will be started in port 3001


3) deploy front-end
	
	- go inside "web" folder
	
	- run "npm install" using cmd
	
	- once the node modules are installed, ensure the base url in "src/config.json" file is valid.
	
	- then execute the command, "npm start"



5) Then you are ready to use the web application. (localhost:3000)


Github basic commands to run each time
-> git add .
-> git commit -m "readme file changed"
-> git push -u origin main