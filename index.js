// import express from "express"; //express node.js web frame.
const express = require("express");
const app = express(); //app dosyasına exp. den türer.

// import dotenv from "dotenv"; //.env dosyasını config eder.
// const dotenv = require("dotenv");
require("dotenv").config(); // env. dosyasını buraya alır.

const PORT = process.env.PORT || 5000;

//database connect
require("./db/mongodbConnection");

//Sıralama önemlidir. yoksa işlemi göremezsin!
//Middlewares
app.use(express.json()) //gönderilen isteklerin body'sinin okunmasını sağlayan middlewaredir.
app.use(express.json({ limit: '50mb' })); //json 50mb 'e kadar çekebilsin demektir. node.js için gerekli.
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })); //url'i encoded edebilsin demektir. node.js için gereklidir.

const router = require("./routers/indexRouter");
app.use("/api", router);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => console.log("Sistem ayaga kalktı."));
