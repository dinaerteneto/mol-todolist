import React from "react";
import { connect } from "react-redux";
import { Button, List, Checkbox, Grid, Icon, Input } from "semantic-ui-react";
import cx from "classnames";
import { doneTodo, delTodo, editTodo, updTodo } from "../redux/actions";

class Todo extends React.Component {

  constructor(props) {
    super(props);
  }

  handleBlur = (id, event) => {
    const name = event.target.value;
    this.updItem(id, name);
  }

  handleKeyUp = (id, event) => {
    if(event.keyCode === 13) {
      const name = event.target.value;
      this.updItem(id, name);
    }
  }

  updItem = (id, name) => {
    this.props.editTodo(id);
    this.props.updTodo(id, name);
  }

  render() {
    const { todo, doneTodo, delTodo, editTodo, editing } = this.props;
    let item = <Checkbox
      label={todo.name}
      checked={todo.done}
      onChange={() => doneTodo(todo.id)}
      className={cx('', todo && todo.done && "todo-item__text--completed")}
    />;

    if (editing.isEditing && editing.todoId === todo.id) {
      item = <Input
        key={todo.key}
        defaultValue={todo.name}
        onBlur={event => this.handleBlur(todo.id, event)}
        onKeyUp={event => this.handleKeyUp(todo.id, event)}
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
                disabled={editing.isEditing || todo.done}
              >
                <Icon name='edit' />
              </Button>
              <Button icon
                size='mini'
                color='red'
                onClick={() => delTodo(todo.id)}
                disabled={editing.isEditing || todo.done}
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
  { doneTodo, delTodo, editTodo, updTodo }
)(Todo);
