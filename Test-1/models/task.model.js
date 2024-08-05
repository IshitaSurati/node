let tasks = [];

const getAllTasks=()=> {
  return tasks;
}

const getTaskById=(id)=> {
  return tasks.find(task => task.id === id);
}

const addTask=(task)=> {
  tasks.push(task);
}

module.exports = { getAllTasks, getTaskById, addTask };
