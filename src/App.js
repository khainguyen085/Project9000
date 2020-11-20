import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {createTodoAtIndex} from './Components/createToDoAtIndex.js'
import {handleKeyDown} from './Components/handleKeyDown.js'
import {removeTodoAtIndex} from './Components/removeTodoAtIndex.js'
import {toggleTodoCompleteAtIndex} from './Components/toggleTodoCompleteAtIndex.js'
import {updateTodoAtIndex} from './Components/updateTodoAtIndex.js'

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Get haircut',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false,
    }
  ]);

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, i) => (
            <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
              <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                {todo.isCompleted && (
                  <span>&#x2714;</span>
                )}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={e => handleKeyDown(e, i)}
                onChange={e => updateTodoAtIndex(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
