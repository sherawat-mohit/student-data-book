const express = require("express");


// setting up port
const PORT = process.env.PORT || 5000;

// initializing express
const app = express();

// setting up view engine
app.set("view engine" , "ejs");


// static files
app.use(express.static("./public"))

// Middleware
app.use((req,res,next) =>{
    console.log("This is Middleware");
    next();
})




// Routes
app.get('/', (req,res) =>{
    // res.send("Hello this is Todo List");
    res.render("index", {name : "Mohit Kumar", std :"12", section : "B", father_name : "Jitendra Singh", email : "dev.sherawatmohit@gmail.com",img:"https://bootdey.com/img/Content/avatar/avatar1.png"});
})

app.get('/about', (req,res) =>{
    res.render("about");
})





// listening to the server
app.listen(PORT, () =>{
    console.log(`Server is up and running on port : ${PORT}`);
})
