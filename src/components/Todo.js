import React from "react";
import { connect } from "react-redux";
import { Button, List, Checkbox, Grid, Icon, Input } from 'semantic-ui-react'
import { doneTodo, delTodo, editTodo } from "../redux/actions";

class Todo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { todo, doneTodo, delTodo, editTodo } = this.props;
    let item = <Checkbox
      label={todo.name}
      checked={todo.done}
      onChange={() => doneTodo(todo.id)}
    />;

    console.log(this.props)

    if (true) {
      item = <Input
        key={todo.key}
        defaultValue={todo.name}
//        onBlur={event => this.handleBlur(todo.id, event)}
//        onKeyUp={event => this.handleKeyUp(todo.id, event)}
        autoFocus
      />
    }

    return (
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
              {item}
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
    )
  }

}

export default connect(
  null,
  { doneTodo, delTodo, editTodo }
)(Todo);
