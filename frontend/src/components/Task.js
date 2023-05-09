import { FaCheckDouble, FaEdit, FaRegTrashAlt } from "react-icons/fa";

const Task = ({ task, id, deleteTask, getSingleTask, toComplete }) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
      <p>
        <b>{id + 1}. </b>
        <span>{task.name}</span>
      </p>
      <div className="task-icons">
        <FaCheckDouble color="green" onClick={() => toComplete(task)} />
        <FaEdit
          color="purple"
          onClick={() => {
            getSingleTask(task);
          }}
        />
        <FaRegTrashAlt color="red" onClick={() => deleteTask(task._id)} />
      </div>
    </div>
  );
};

export default Task;
