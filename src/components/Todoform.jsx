import React,{useState} from 'react'

const Todoform = ({setListdata}) => {
    let [data,moniterData]=useState("");
    const ChangeForm = (e) =>{
        moniterData(e.target.value);
    }
    const clearData = () =>{
        moniterData("");
    }
const handleClick= (e) =>{
    e.preventDefault()
    console.log(data)
    setListdata(data)
    clearData()

} 
    return (
        <form onChange={ChangeForm} onSubmit={handleClick}>
        <input 
                type="text" 
                placeholder="Enter a todo to add"
                value={data}
                />
                {/* <button type="submit">SUBMIT</button> */}
        </form>
    )
}
export default Todoform
