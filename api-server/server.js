const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(path.resolve(__dirname,"../")));
const cardata = require("./page");

app.use("/api/carts",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods","PUT,DELETE,GET,POST,OPTIONS");
    res.json(cardata)
});
console.log(cardata);

app.use("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../","index.html"))
});

app.listen(8080,()=>{
    console.log("success")
});
