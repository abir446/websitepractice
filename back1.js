const fs=require("fs");
let text=fs.readFileSync("hi.txt","utf-8");
text=text.replace("Is","are");
console.log(text);
console.log("Creating a new file");
fs.writeFileSync("hi1.txt",text);