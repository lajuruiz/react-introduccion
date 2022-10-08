/* import logo from './logo.svg'; */
/* import './App.css'; */

import React from "react";
import{TodoCounter} from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";


const todos=[
  {text:"Cortar Cebolla", completed:false},
  {text:"Tomar el curso de React", completed:false},
  {text:"Llorar con la llorona", completed:false}
]


function App(props) {
  return (
    <React.Fragment> 
      <TodoCounter/>

      <TodoSearch/>

      <TodoList>
        {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton/>
      
    </React.Fragment>
  );
}
export default App;

/* TodoCounter: contador de tareas
   <TodoSearch/> : Buscador de tareas
   <TodoList>: lista de tareas
    <TodoItem/> : componente para reutilizar cada vez que los usuarios creen una tarea
    <CreateTodoButton/>: boton para abrir el modal y crear nuevos todo

    Input: permite que el valor que escribamos en el va a cambair los items  que aparecen en el todolist
*/