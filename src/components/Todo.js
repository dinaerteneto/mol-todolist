import React from "react";
import { connect } from "react-redux";
import { Button, List, Checkbox, Grid, Icon } from 'semantic-ui-react'
import { doneTodo, delTodo, editTodo } from "../redux/actions";

const Todo = ({ todo, doneTodo, delTodo, editTodo }) => (
  <List.Item>
    <List.Content>

      <Grid
        centered
        columns={2}
        padded
        stackable
        textAlign='center'
      >
        <Grid.Column>
          <Checkbox
            label={todo.name}
            checked={todo.done}
            onChange={() => doneTodo(todo.id)}
          />
        </Grid.Column>

        <Grid.Column>
          <Button icon
            size='mini'
            color='yellow' 
            onClick={() => editTodo(todo.id)}
            >
            <Icon name='edit' />
          </Button>
          <Button icon
            size='mini'
            color='red'
            onClick={() => delTodo(todo.id)}
          >
            <Icon name='trash alternate' />
          </Button>
        </Grid.Column>

      </Grid>

    </List.Content>

  </List.Item>
);

export default connect(
  null,
  { doneTodo, delTodo, editTodo }
)(Todo);
