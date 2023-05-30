// const express = require("express");
// const bodyParser = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const mongoose = require("mongoose");
// const app = express();
// app.use(bodyParser.json());
// app.use(cors());
// dotenv.config();

// const PORT = 3000;

// const BizproSchema = new mongoose.Schema({
//   title: String,
//   des: String,
//   imgURL: String,
// });
// const BizproModel = mongoose.model("Bizpro", BizproSchema);

// app.get("/api", (req, res) => {
//   req.send("api is ruuning");
// });

// //get all datas
// app.get("/api/datas", (req, res) => {
//     const  searchestData= BizproModel.title.toLowerCase().trim().includes(title.toLowerCase().trim())
//   res.send(searchestData);
// });

// //delete data
// app.delete("/api/datas/:id", async (req, res) => {
//   const id = params.id;
//   const deletedData = await BizproModel.findByIdAndDelete(id);
//   res.send(deletedData);
// });
// //post data
// app.post("/api/datas", async (req, res) => {
//   const newData = new BizproModel();
//   const { title, des, imgURL } = req.query;
// });
// // //put data
// //  app.listen(PORT, (req,res)=>{
// //     console.log(`app is listening on port: ${PORT}`)
// //  })

// DB_CONNECTION = process.env.DB_CONNECTION;
// mongoose.connect(DB_CONNECTION).then(() => {
//   console.log("mongo db is connected");
// });




const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
dotenv.config();
app.use(cors())


const PORT = 8080;

const brizproSchema = new mongoose.Schema({
    title: String,
    des: String,
    imgURL: String
})
const brizproModel = mongoose.model('System', brizproSchema);

app.get('/api', (req, res) => {
    res.send('app is runing')
})

//get all data
app.get('/api/systems', async (req,res)=>{
    const systems= await brizproModel.find()
    res.send(systems)
})

//get data by id
app.get('/api/systems/:id', async (req, res) => {
    const id = req.params.id;
    const system = await brizproModel.findById(id)
    res.send(system);
})
//delete
app.delete('/api/systems/:id', async (req, res) => {
    const id = req.params.id;
    const deleteSystem = await brizproModel.findByIdAndDelete(id);
    res.send(`${deleteSystem.title} is deleted!`)
});

//post
app.post('/api/systems', async (req, res) => {
    const { title, des } = req.body;
    const newSystem = new brizproModel({
        title: title,
        des: des
    })
    await newSystem.save()
    res.send(`${newSystem.title} is posted!`)
});

//put
app.put('/api/systems/:id', async (req, res) => {
    const id = req.params.id;
    const { title, des } = req.body;
    const editingSystem = { title: title, des: des };
    await brizproModel.findByIdAndUpdate(id, editingSystem)

    res.send(`${editingSystem.title} is edited!`)
})


app.listen(PORT, () => {
    console.log(`app is listening on PORT: ${PORT} `)
})

DB_PASSWORD = process.env.DB_PASSWORD
DB_CONNECTION = process.env.DB_CONNECTION
mongoose.connect(DB_CONNECTION)
    .then(() => {
        console.log('mongo db concected')
    })