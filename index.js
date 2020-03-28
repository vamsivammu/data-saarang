const { Pool, Client } = require('pg')
const connectionString = 'postgres://vzbbqzpfpolrsc:4c98c089c3d79905dfe1f8fe496e466e893d32ffb7842b22fa4f1f5dad744ac8@ec2-54-197-48-79.compute-1.amazonaws.com:5432/d8mgai0jqu28fs'
const pool = new Pool({
  connectionString: connectionString,
})
const express = require('express')
const bp = require('body-parser')

const app = express()

app.use(bp.json())
app.post('/',(req,res)=>{
    pool.query('SELECT * FROM Persons',(err,res1)=>{
        console.log(err,res1)
        res.json(res1)
    })
})
const port = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("listening")
})
