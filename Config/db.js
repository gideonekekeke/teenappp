const mongoose = require("mongoose")
const url = "mongodb+srv://admin:ilovemusic1234@cluster0.21gv0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(url)

mongoose.connection
.on("open", (strem)=>{
  console.log("database is conneted sucessfully");
})
.once("error", (strem)=>{
console.log("database cant conect");
})

module.exports = mongoose