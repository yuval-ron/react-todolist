import React, { Component } from 'react';

export default class Todo extends Component {
  state = {
    loading: false
  }

  onChangeIsDone = () => {
    const {todo, updateTodo} = this.props

    this.setState({loading: true})
    updateTodo(todo.id, !todo.isDone, () => {
      this.setState({loading: false})
    })
  }

  deleteTodo = () => {
    const {todo, deleteTodo} = this.props
    deleteTodo(todo.id)
  }

  render() {
    const {todo} = this.props

    return (
      <li className={`todo ${this.state.loading ? 'loading' : ''}`}>
        <button className="delete-todo" onClick={this.deleteTodo}>X</button>
        <input type="checkbox" checked={todo.isDone} onChange={this.onChangeIsDone} />
        <span className={todo.isDone ? 'done' : ''}>{todo.title}</span>
      </li>
    )
  }
}
