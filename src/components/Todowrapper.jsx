import React from 'react'
import { useState } from 'react/cjs/react.development'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Todoform from './Todoform'
import Todolist from './Todolist'

const Todowrapper = () => {
    let [todoLIst,setTodoLIst]=useState([]);
    const setListdata = (data) =>{
        setTodoLIst([...todoLIst,data])
        notify("Todo added Successfully!");
    }
    const notify = (text) => {
        toast.success(`🦄 ${text}`, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };
    
    return (
        <div className="Todowrapper">
        <Todoform setListdata={setListdata} />
        <Todolist todoLIst={todoLIst}/>
        <ToastContainer />
        </div>
    )
}

export default Todowrapper
