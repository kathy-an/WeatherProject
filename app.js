const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
//make get request with node https module:
//native mode
app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
})
app.post("/",function(req,res){
  console.log(req.body.cityName);
})
/*
const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=a2263d9bf6d89ae21c5cdc95c25c654a";
https.get(url,function(response){
    console.log(response);

    response.on("data", function(data){
      //pass from hex, into JS Obj
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      res.write("The weather is"+ description);
      res.write("<h1>The temperature is"+temp +"</h1>");
      res.send();
      //from JS to string
      /*
      const object = {
        name: "Angela"
      }
      JSON.stringify(object);
    });
});*/
app.listen(3000);
