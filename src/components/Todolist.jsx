import React from 'react'

const Todolist = ({todoLIst}) => {
  console.log(todoLIst)
  return (
    <div className="TOdolist">
  
      <ul>
      {todoLIst.map((item, idx) => (
        <li  key={idx}>
          <p>{item}</p>
          <i class="fas fa-edit"></i>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Todolist
