import React from 'react';
import { Route, Link } from "react-router-dom";

const todo = (props) => {
  console.log(props);
  return (
    <div
      className={props.task.completed? 'completed todoItem' : 'todoItem'}>
        <div className="todoTitle">
          {props.task.title}
        </div>
        <div className="todoButtons">
          <Link className="linkButton" to={`/todos/${props.task.id}/edit`}>Edit </Link>
          <button onClick={props.remove.bind(this, props.task.id)}>Delete</button>
          {!props.task.completed? <button onClick={props.complete.bind(this, props.task.id)}>Complete</button> : null}

        </div>
        <div className="clearfix"></div>
    </div>
  );
}

export default todo;
