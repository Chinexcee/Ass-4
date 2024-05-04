// setting up the server using express to run the server
// Express (a node.js framework)

const express = require('express')
const dotenv = require("dotenv")
dotenv.config()


const app = express()
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log(`Server is running on ${PORT}`) 
})

// Endpoint 1
app.get("/string", (request, response)=>{
  response.send("My little brother is brilliant!")
}),

// Endpoint 2
app.get("/object", (requet, response)=>{
  response.send({title: "Object",
    body:"This is a get request for a string"})
})

// Endpoint 3
app.get("/Array", (requet, response)=>{
  response.json([{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
  },
 ])
})
// Nodemon a dev dependency....only used during development 
// data environment where we store secret info...Dotenv
// CRUD ( Create, Read from the database, Update and Delete) and Authentication