import React, { Component } from 'react';
import { Route, Link, Switch, withRouter } from "react-router-dom";
import './App.css';

import TodoList from './components/TodoList';
import NewForm from './components/NewForm';
import TodoForm from './components/TodoForm';

class App extends Component {
  state = {
    tasks: [],
    nextId: 0
  }

  addTaskHandler = (event) => {
    const tasks = [...this.state.tasks];
    const nextId = this.state.nextId;

    const newTask = {
      id: nextId,
      title: event.target.title.value,
      completed: false
    }

    tasks.push(newTask);
    this.setState({tasks: tasks, nextId: nextId +1 });

    event.preventDefault();
    event.target.reset();
    this.props.history.push('/');
  }

  removeTaskHandler = (id) => {
    const newTasks = this.state.tasks.filter(t => t.id !== id);
    this.setState({ tasks: newTasks });
  }

  completeTaskHandler = (id) => {
    const tasks = [...this.state.tasks];
    const index = this.state.tasks.findIndex(task => task.id === id);
    tasks[index].completed = true;

    this.setState({ tasks: tasks });
  }

  editTaskHandler = (event) => {
    event.preventDefault();
    const id=event.target.id.value;
    const tasks = [...this.state.tasks];
    console.log(id);
    const index = this.state.tasks.findIndex(task => task.id == id);
    tasks[index].title = event.target.title.value;

    this.setState({ tasks: tasks });
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>
            <Link to="/">See my todos!</Link>
          </h2>
          <p>
            <Link to="/todos/new">Add a todo!</Link>
          </p>
        </header>
        <div className="container">
          <Switch>
            <Route
              path="/"
              exact
              render={props => (
                <TodoList
                  tasks={this.state.tasks}
                  remove={this.removeTaskHandler}
                  complete={this.completeTaskHandler}
                  />
              )}
              />
            <Route
              path="/todos/new"
              render={props => <NewForm submitted={this.addTaskHandler.bind(this)} />}
              />

            <Route
              exact
              path="/todos/:id/edit"
              component={props => {
                let taskId = props.match.params.id
                let task = this.state.tasks.find(t => {
                  return t.id == taskId
                });
                return (
                  <TodoForm
                    task={task}
                    submitted={this.editTaskHandler}
                  />
                );
              }}
              />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
