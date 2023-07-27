const TodoScema = require('../model/TodoScema');


// get todo list
module.exports.getToDo = async (req,res)=>{
    const toDo = await TodoScema.find()
    res.send(toDo)
}

// save to do
module.exports.saveToDo = async (req,res)=>{
    const {text}=req.body
    await TodoScema.create({text}).then((data)=>{res.send(data)})
}

// update todo
module.exports.updateToDo = async (req,res)=>{
    const {_id,text}=req.body
    await TodoScema.findByIdAndUpdate(_id,{text}).then(()=>res.send('update success'))
}

// delete to do
module.exports.deleteToDo = async (req,res)=>{
    const {_id}=req.body
    await TodoScema.findByIdAndDelete(_id).then((data)=>res.send('delete success'));
}
