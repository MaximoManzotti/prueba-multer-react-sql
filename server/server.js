const express = require('express')
const app = express()
const mysql = require('mysql')
const myconnection = require('express-myconnection')
const cors = require('cors')


app.listen(9000, ()=>{
console.log('server running')
})

app.use(cors())

app.use(myconnection(mysql,{
host: `localhost`,
port: `3306`,
user: 'root',
password:'',
database: `Imagenes`
}))
app.use(require('./routes/routes'))