import React, { Component } from 'react';
import './App.css';
import TodosList from './TodosList'
import NewTodoForm from './NewTodoForm'
import Messages from './Messages';

export default class App extends Component {
  componentWillMount() {
    const {getTodos} = this.props
    this.state = {}

    getTodos(
      (todos) => {
        this.setState({ todos })
      })
  }

  addTodo = (todo) => {
    const {getNewId, updateTodos} = this.props
    const {todos} = this.state

    const newTodo = {
      id: getNewId(),
      ...todo
    }

    todos[newTodo.id] = newTodo

    this.setState({ todos })
    updateTodos(todos)
  }

  updateTodo = (todoId, isDone, callback) => {
    const {updateTodos} = this.props
    const {todos} = this.state

    todos[todoId].isDone = isDone

    this.setState({ todos })
    updateTodos(todos, callback)
  }

  deleteTodo = (todoId) => {
    const {updateTodos} = this.props
    const {todos} = this.state

    delete todos[todoId]

    this.setState({ todos })
    updateTodos(todos)
  }

  renderList() {
    const {todos} = this.state
    if (this.state.todos) {
      return (
        <div>
          <NewTodoForm addTodo={this.addTodo}/>
          <TodosList todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Messages todos={todos}/>
         </div>
       )
    }
    return <div className="loading-overlay">loading...</div>
  }

  render() {
    return (
      <div className="App">
        {this.renderList()}
      </div>
    );
  }
}
