import React from 'react'
import { useState } from 'react/cjs/react.development'
import Todoform from './Todoform'
import Todolist from './Todolist'

const Todowrapper = () => {
    let [todoLIst,setTodoLIst]=useState([]);
    const setListdata = (data) =>{
        setTodoLIst([...todoLIst,data])
    }
    return (
        <div className="Todowrapper">
        <Todoform setListdata={setListdata} />
        <Todolist todoLIst={todoLIst}/>
        </div>
    )
}

export default Todowrapper
