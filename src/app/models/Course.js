const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create model Course (table in sql)
const Course = new Schema({
    name: { type: String },
    description: { type: String },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    slug:{type:String},
});
//access to model (src/index.js will do it)
module.exports=mongoose.model('Course', Course);//? const MyModel = mongoose.model('ModelName', mySchema);

