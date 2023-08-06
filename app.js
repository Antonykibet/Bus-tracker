const express = require('express')
const path =require('path')

const app = express()
const PORT=3500

app.use(express.json())
app.use(express.static('./public'))


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html') )
})
app.get('/admin',(req,res)=>{
    res.sendFile(path.join(__dirname,'admin.html') )
})
// app.post('/update',(req,res)=>{
//     console.log(req.body)
//     res.send('test')
// })

app.listen(PORT,()=>console.log(`Server is listening at port ${PORT}`))