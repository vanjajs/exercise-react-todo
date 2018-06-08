import React from 'react';

import Todo from './Todo';

const todoList = (props) => {
  const list  = props.tasks.map((task, index) => {
    return <Todo key={index} task={task} remove={props.remove} complete={props.complete} />
  });

  return (
    <div>
      {list}
    </div>
  );
}

export default todoList;
