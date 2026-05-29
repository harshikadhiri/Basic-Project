const express = require("express");

const example = express();

example.use(express.json());


// HOME ROUTE
example.get("/", (req,res)=>{
    res.send("backend running");
});


// USERS ROUTE
example.get("/users", (req,res)=>{

    const users = [
        {id:1, name:"Harshitha", age:21},
        {id:2, name:"Ram", age:17},
        {id:3, name:"Anu", age:25},
        {id:4, name:"Kiran", age:19}
    ];

    // FILTER
    const filtered = users.filter(
        user => user.age >= 18
    );

    // SORT
    filtered.sort((a,b)=> a.age - b.age);

    // RESPONSE
    res.json(filtered);

});


// SERVER
example.listen(5000, ()=>{
    console.log("server running");
});