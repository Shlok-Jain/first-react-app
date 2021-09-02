import './App.css';
import Header from './components/Header';
import Fotter from './components/Fotter';
import Todo from './components/Todo'
import Addtodo from './components/Addtodo';
import About from './About';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }))
  }
  const submit = (title, desc)=>{
    todos.push({ sno: todos[todos.length-1].sno +1,title: title , desc:desc})
  } 
  const [todos, setTodos] = useState( [
    {
      sno:1,
      title:"Study",
      desc:"Physics Chemisrty Maths study "
    },
    {
      sno:2,
      title:"Sleep",
      desc:"so ja"
    }
  ])
  return (
    <Router>
    <Header/>
    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/add-todo">
            <Addtodo submit = {submit}/>
          </Route>
          <Route exact path="/" render={()=>{
            return(
            <>
          <Todo todos = {todos} onDelete = {onDelete}/>
          </>)
          }}>
              
          </Route>
        </Switch>
    
    <Fotter/>
    </Router>
  );
}

export default App;
