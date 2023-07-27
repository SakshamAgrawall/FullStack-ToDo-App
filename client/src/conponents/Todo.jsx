import React from 'react'
import { MdOutlineEdit,MdOutlineDelete } from 'react-icons/md'

const Todo = ({text,updateMode,deleteMode}) => {
  return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
        <MdOutlineEdit className="icon" onClick={updateMode}/>
        <MdOutlineDelete className="icon" onClick={deleteMode}/>
        </div>
    </div>
  )
}

export default Todo