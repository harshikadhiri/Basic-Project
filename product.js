const express=require("express")

const product=express();

product.use(express.json());

product.get("/",(req,res)=>{
    res.send("Backend Working");
})

product.get("/products" ,(req,res)=>{
       
    const products = [
   { id:1, name:"Laptop", price:50000 },
   { id:2, name:"Mobile", price:20000 },
   { id:3, name:"Headphones", price:3000 },
   { id:4, name:"Keyboard", price:1500 }
];
   
const filtered = products.filter(
        products => products.price > 5000
    );

    filtered.sort((a,b)=> b.price - a.price);

    res.json(filtered);

});


product.listen(3000, ()=>{
    console.log("Server running");
});
