import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// DATABASE

let todos = JSON.parse(localStorage.getItem('todos'))

todos = todos || {
  1: {
    id: 1,
    title: "Read Book",
    isDone: false
  },
  2: {
    id: 2,
    title: "Learn React",
    isDone: false
  },
  3: {
    id: 3,
    title: "Sleep In Spoons",
    isDone: false
  }
}

const getTodos = (callback) => {
  setTimeout(() => {
    callback(todos)
  }, 1000)
}

const getNewId = () => {
  const idsAsNumbers = Object.keys(todos).map(id => parseInt(id, 10));
  return Math.max(...idsAsNumbers) + 1
}


const updateTodos = (todos, callback) => {
  setTimeout(() => {
    localStorage.setItem('todos', JSON.stringify(todos))

    if (callback) {
      callback()
    }
  }, 1000)
}

// DATABASE

ReactDOM.render(
    <App getTodos={getTodos} updateTodos={updateTodos} getNewId={getNewId} />,
  document.getElementById('root')
);
