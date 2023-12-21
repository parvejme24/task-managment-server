const express = require("express");
const app = new express();


app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get('*', (req, res)=>{
    res.status(404).json({type: "fail", status: "Not Found"})
})


module.exports = app;
