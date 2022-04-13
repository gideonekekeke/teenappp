const mongoose = require("mongoose")
const bycrpt = require("bcrypt")

const myUser = mongoose.Schema({

 
  zones:{
    type:String,
    require:true
  },
  name:{
    type:String,
    default:false
  },
 
  email:{
    type:String,
    default:false
  },

  zonesmainUser:[{ 
    type:mongoose.Schema.Types.ObjectId,
    ref:"userzones"
  }]
 
},
{timestamps:true}
)



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

const allUser = mongoose.model("users",  myUser)
module.exports = allUser