import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, toggleReminder }) => {
  return (
    <>
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            task={task}
            handleDelete={onDelete}
            toggleReminder={toggleReminder}
          />
        );
      })}
    </>
  );
};

export default Tasks;
