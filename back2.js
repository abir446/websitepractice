// Synch or blocking
// Asynch of non blocking
const fs=require("fs");
let text=fs.readFile("hi.txt","utf-8",(err,data)=>{
    console.log(err,data)
});
console.log("This is a message")