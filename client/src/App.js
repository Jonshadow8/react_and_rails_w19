import React from 'react';
import axios from "axios";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Container, } from "semantic-ui-react";

class App extends React.Component {
  state = { todos: [], };

  componentDidMount() {
    axios.get("/api/items")
      .then( res => {
        this.setState({ todos: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  };

  addTodo = (name) => {
    axios.post("/api/items", { name, })
      .then( res => {
        this.setState({ todos: [...this.state.todos, res.data], });
      })
  };

  updateTodo = (id) => {
    axios.put(`/api/items/${id}`)
      .then( res => {
        const todos = this.state.todos.map( todo => {
          if (todo.id === id)
            return res.data;
          return todo;
        });
        this.setState({ todos, });
      })
  };

  deleteTodo = (id) => {
    axios.delete(`/api/items/${id}`)
      .then( res => {
        this.setState({ todos: this.state.todos.filter( t => t.id !== id ) })
      })
  };

  render() {
    return (
      <Container style={{ padding: "30px 0" }}>
        <h1>Todo List</h1>
        <TodoForm addTodo={this.addTodo} />
        <br />
        <br />
        <TodoList 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo} 
          updateTodo={this.updateTodo}
        />
      </Container>
    );
  };
};

export default App;
