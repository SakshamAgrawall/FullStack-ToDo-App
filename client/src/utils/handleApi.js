import axios from 'axios';

const baseUrl = "https://todo-ejou.onrender.com";

const getAllToDo = (setToDo)=>{
    axios.get(baseUrl).then(({data})=>{
        setToDo(data);
    }).catch((error)=>console.log(error))
}

const addToDo = (text,setText,setToDo)=>{
    axios.post(`${baseUrl}/save`,{text}).then((data)=>{
        setText("");
        getAllToDo(setToDo)
    }).catch((error)=>console.log(error))
}
const updateToDo = (toDoId,text,setText,setToDo,setIsUpdating)=>{
    axios.post(`${baseUrl}/update`,{_id:toDoId,text}).then((data)=>{
        setText("");
        setIsUpdating(false);
        getAllToDo(setToDo)
    }).catch((error)=>console.log(error))
};

const deleteToDo = (toDoId,setToDo)=>{
    axios.post(`${baseUrl}/delete`,{_id:toDoId}).then((data)=>{
        getAllToDo(setToDo)
    }).catch((error)=>console.log(error))
};


export {getAllToDo,addToDo,updateToDo,deleteToDo};