const mongoose = require('mongoose');


const TodoScema = new mongoose.Schema({
    text:{
        type:String,
        require:true
    }
})
module.exports=mongoose.model('ToDo',TodoScema);