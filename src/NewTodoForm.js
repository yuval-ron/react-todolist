import React, { Component } from 'react';

export default class NewTodoForm extends Component {
  onClick = () => {
    const {addTodo} = this.props

    addTodo({
      title: this.refs.newTodoTitle.value,
      isDone: false
    })

    this.refs.newTodoTitle.value = ""
  }

  render() {
    return (
      <div className="new-todo-form">
        <input ref="newTodoTitle" className="new-todo-title" />
        <button className="new-todo-submit" onClick={this.onClick}>Add Todo!</button>
      </div>
    )
  }
}
