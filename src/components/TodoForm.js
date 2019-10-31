import React from "react";
import { connect } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form } from 'semantic-ui-react'

import { addTodo } from "../redux/actions";

const TaskSchema = Yup.object().shape({
  taskName: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
});

const TodoForm = ({ addTodo }) => {
  const formik = useFormik({
    initialValues: {
      taskName: ""
    },
    validationSchema: TaskSchema,
    onSubmit: ({ taskName }) => {
      addTodo(taskName);
    }
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Input fluid
          id="taskName"
          name="taskName"
          onChange={formik.handleChange}
          value={formik.values.taskName}
          width={8}
          placeholder="Digite o título da tarefa"
        />
        
        <Form.Button primary fluid type="submit" disabled={formik.errors.taskName}>
          Add
        </Form.Button>
        
      </Form.Group>
    </Form>
  );
};

export default connect(
  null,
  { addTodo }
)(TodoForm);
