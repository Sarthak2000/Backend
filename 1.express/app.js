let express=require("express") // Server: // route  -> request -> response/file 

const app=express(); // server init
app.use(express.json()); // to get data into "post(req)" from postman

app.get("/",function(req,res){
    res.send("Hello from Server")
})

let user= {
}

app.get("/user",function(req,res){ // getting data from server
    res.send(user)
})

app.post("/user",function(req,res){ // sending data to server
    user=req.body;
    // console.log(user);
    res.status(200).send(user)
})

app.patch("/user",function(req,res){
    let obj=req.body; // adds whatever postman has in its body to user obj
    for(let key in obj){
        user[key] = obj[key]
    }
    res.status(200).json(user);
})
app.delete("/user",function(req,res){
    user={}
    res.status(200).json(user);
})

app.get("/user/:id", function (req, res) { // suppose user is on user/xyzyzyz
    console.log(req.params);  // op -> xyzyzyz
    res.status(200).send("Hello");
})
app.listen(3000,function(req,res){
    console.log("server started");
})