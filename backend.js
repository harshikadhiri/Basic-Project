const express = require("express");

const backend = express();

backend.use(express.json());

backend.get("/" , (req,res)=>{
    res.send("Backend Working");
});

backend.get("/numbers" , (req,res)=>{
    const numbers =[5,2,8,2,10,5,1];

    const unique=[...new Set(numbers)];

    unique.sort((a,b)=> a-b);

    res.json(unique);
});

backend.listen(5000 , ()=>{
    console.log("Server Running");
}
);