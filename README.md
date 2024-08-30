# Weather Service App 

* For installing packages `npm install`
* For `express` `npm install express --save`
* For `Axios` `npm install axios --save`
* For `Nodemon` `npm install -g nodemon`
* For initializing the project `npm init -y`


  **Test this Urls**

  * GET http://localhost:3000/weather?city=Hyderabad
 
  * Response:

    {
    
      "city":"Hyderabad",
    
      "temperature":25,
    
      "description":"Haze",
    
      "wind_speed":6,
    
      "humidity":83,
    
      "feelslike":28,
    
      "observation_time":"04:56 PM"
    
    }

* GET http://localhost:3000/weather?city=New%20York 

* Response:

  {
  
    "city":"New York",
  
    "temperature":22,
  
    "description":"Overcast",
  
    "wind_speed":4,
  
    "humidity":63,
  
    "feelslike":22,
  
    "observation_time":"04:56 PM"
  
  }
