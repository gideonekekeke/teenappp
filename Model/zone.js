const mongoose = require("mongoose")
const bycrpt = require("bcrypt")

const zoneUser = mongoose.Schema({

 
  churchName:{
    type:String,
    require:true
  },
  groupName:{
    type:String,
    default:false
  },
 
  userinfo:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
 
})



// myUser.methods.matchPassword = async function(enterPassword){
//   return await bycrpt.compare(enterPassword, this.password)
// }


// myUser.pre('save', async function(next){
//   if(!this.isModified){
//     next()
//   }

//   const salt = await bycrpt.genSalt(10)
//   this.password = await bycrpt.hash(this.password, salt)
// })

const dzoneUser = mongoose.model("userzones",  zoneUser)
module.exports = dzoneUser