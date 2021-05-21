import React from "react";
import Lists from "./lists";
import { useSelector } from "react-redux";
import { connect } from "react-redux";

const TodoTasks = (props) => {
  const tasks = useSelector((state) => state.todoTasks);
  return (
    <div className="row m-2">
      <ul className="">
        <Lists tasks={tasks} />
      </ul>
    </div>
  );
};

export default connect()(TodoTasks);
