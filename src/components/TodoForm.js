import React from 'react';

const todoForm = (props) => (
  <form onSubmit={props.submitted}>
    <input type="hidden" name="id" readOnly value={props.task.id} />
    <input type="text" name="title" defaultValue={props.task.title} />
    <button>Submit</button>
  </form>
);

export default todoForm;
