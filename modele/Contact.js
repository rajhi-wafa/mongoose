const mongoose = require("mongoose")
const schema= mongoose.schema

const ContactSchema = new schema({
    name:{type:String},
    age:{type:Number},
    favoriteFoods:{type:String}
})
module.export=Contact = mongoose.model('contact',ContactSchema)