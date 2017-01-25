import React, { Component } from 'react';
import Todo from './Todo'

export default class TodosList extends Component {
  renderTodos() {
    const {todos, updateTodo, deleteTodo} = this.props

    return Object.values(todos).map((todo, index) => {
      return (
        <Todo key={index} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
      )
    })
  }

  render() {
    return (
      <ul className="todos-list">
        {this.renderTodos()}
      </ul>
    )
  }
}
