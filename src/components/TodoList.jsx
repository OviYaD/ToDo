import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import {
  deleteTaskAPI,
  getTasksAPI,
  postTaskAPI,
  updateTaskAPI,
} from "../services/task";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTasksAPI();
      console.log(result);
      setTaskList(result);
    };

    fetchData(); // 10 sec
  }, []);

  const deleteTask = async (task) => {
    await deleteTaskAPI(task._id);
    setTaskList(taskList.filter((t) => t._id !== task._id));
  };

  const updateListArray = async (id, obj) => {
    console.log(id, obj);
    const updatedTask = await updateTaskAPI(id, obj);
    console.log(updatedTask);
    setTaskList(taskList.map((t) => (t._id === id ? updatedTask : t)));
    setModal(false);
  };

  const saveTask = async (taskObj) => {
    const newTask = await postTaskAPI(taskObj);
    setTaskList([...taskList, newTask]);
    setModal(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
        <button className="btn btn-warning mt-2 ml-3" onClick={handleLogOut}>
          Log Out
        </button>
      </div>
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              key={index}
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
