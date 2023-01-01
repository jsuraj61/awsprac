const express=require('express')
const app=express()

app.get('/',(req,resp)=>{
    resp.sendFile('public/Resume.html',{root:__dirname})
})

app.listen(4000,()=>{
    console.warn("server started")
})