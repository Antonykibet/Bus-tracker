const express = require('express')
const {MongoClient} = require('mongodb')
const path =require('path')

const app = express()
const PORT=3500
const uri = "mongodb+srv://antonykibet059:123Acosta@cluster0.eoos6vz.mongodb.net/?retryWrites=true&w=majority";
const dbClient = new MongoClient(uri) 
let db;
let collection;

app.use(express.json())
app.use(express.static('./public'))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html') )
})
app.get('/admin',(req,res)=>{
    res.sendFile(path.join(__dirname,'admin.html') )
})

app.get('/getLocation',async(req,res)=>{
    let coords = await collection.findOne({name:'Bus1'})
    console.log(coords)
    res.json(coords)
})
app.post('/update',async(req,res)=>{
    let coords = req.body
    await collection.updateOne({name:'Bus1'},{$set:{location:coords}})
})

app.listen(PORT, async()=>{
    await dbClient.connect()
    db = await dbClient.db('Bus-Tracker')
    collection= await db.collection('location')
    console.log('Db Connected...')
    console.log(`Server is listening at port ${PORT}...`
    )})