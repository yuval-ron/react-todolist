import React, { Component } from 'react';

export default class Messages extends Component {
  renderMessage() {
    const {todos} = this.props

    const todosLength = Object.keys(todos).length
    const doneTodosLength = Object.values(todos).filter(todo => todo.isDone).length

    if (doneTodosLength < todosLength)
      return <div>You've finished {doneTodosLength} tasks out of {todosLength}.</div>

    return <div>Congrats! You've done everything you planned to do!</div>
  }

  render() {
    return (
      <div>
        {this.renderMessage()}
      </div>
    )
  }
}
