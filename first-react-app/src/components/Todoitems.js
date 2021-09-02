import React from 'react'

export default function Todoitems({todo,onDelete}) {
    return (
        <div>
            <div className="card">
            <div className="card-body">
            <h5 className="card-title"> {todo.title}</h5>
            <hr />
            <p className="card-text">{todo.desc}</p>
            <button className="btn btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
            </div>
            </div>
            
        </div>
    )
}
