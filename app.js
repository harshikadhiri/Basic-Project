const express = require("express");

const app = express();

app.use(express.json());


// ROOT ROUTE
app.get("/", (req,res)=>{
    res.send("Backend Working");
});


// STUDENTS ROUTE
app.get("/students", (req,res)=>{

    const students = [
        { id:1, name:"Harshitha", marks:85 },
        { id:2, name:"Ram", marks:60 },
        { id:3, name:"Anu", marks:95 }
    ];

    const filtered = students.filter(
        student => student.marks > 70
    );

    filtered.sort((a,b)=> b.marks - a.marks);

    res.json(filtered);

});


app.listen(3000, ()=>{
    console.log("Server running");
});