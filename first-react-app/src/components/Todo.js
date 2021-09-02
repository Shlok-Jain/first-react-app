import React from 'react'
import Todoitems from './Todoitems'

export default function todo(props) {
    return (
        <div className="container">
            {props.todos.length===0? 
            <h3>No todos to display</h3>:
            props.todos.map((todo)=>{
                return <Todoitems  todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
            })}
            
        </div>
    )
}
