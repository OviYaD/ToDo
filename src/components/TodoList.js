import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import { getTask, postTask, removeTask, updateTask } from "../api";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getTask();
      console.log(result);
      setTaskList(result);
    };

    fetchData(); // 10 sec
  }, []);

  const deleteTask = async (task) => {
    await removeTask(task.id);
    setTaskList(taskList.filter((t) => t.id !== task.id));
  };

  const updateListArray = async (obj, id) => {
    const updatedTask = await updateTask(id, obj);
    setTaskList(taskList.map((t) => (t.id === id ? updatedTask : t)));
    setModal(false);
  };

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = async (taskObj) => {
    console.log(taskObj);
    // taskObj["id"] = 1;
    const newTask = await postTask(taskObj);
    setTaskList([...taskList, newTask]);
    setModal(false);
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              key={obj.id}
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
