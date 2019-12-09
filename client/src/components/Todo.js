import React from "react";
import { Checkbox, Header, Button, Icon, } from "semantic-ui-react";

const Todo = (props) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Checkbox 
        defaultChecked={props.complete} 
        onClick={() => props.updateTodo(props.id)}
      />
      <div style={props.complete ? styles.complete : {}}>
        <Header as="h2" style={{ marginLeft: "15px", }}>{ props.name }</Header>
      </div>
    </div>
    <Button
      icon
      color="red"
      size="tiny"
      style={{ marginLeft: "15px", }}
      onClick={() => props.deleteTodo(props.id)}
    >
      <Icon name="trash" />
    </Button>
  </div>
);

const styles = {
  complete: {
    textDecoration: "line-through",
    color: "grey",
  },
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};    

export default Todo;
