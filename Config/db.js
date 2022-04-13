const mongoose = require("mongoose")
const url = "mongodb://localhost/teeVolution3"


mongoose.connect(url)

mongoose.connection
.on("open", (strem)=>{
  console.log("database is conneted sucessfully");
})
.once("error", (strem)=>{
console.log("database cant conect");
})

module.exports = mongoose