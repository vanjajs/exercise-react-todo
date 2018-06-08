import React from 'react';

const newForm = (props) => (
  <form onSubmit={props.submitted}>
    <input type="text" name="title" placeholder="Enter task..." />
    <button>Submit</button>
  </form>
);

export default newForm;
