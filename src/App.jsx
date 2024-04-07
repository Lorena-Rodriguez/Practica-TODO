import { useState, useEffect } from 'react'
import './App.css'
import Task from './components/Task'
import Form from './components/Form'
function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const handleChange = e => {
    setTask(e.target.value);
  };
  const addTask = e => {
    e.preventDefault();
    if (task.trim() === '') {
      alert('Debes agregar algo');
      return;
    }
    const newTask = {
      id: Date.now(),
      task,
      complete: false
    };
    const totalTask = [newTask, ...tasks];
    setTasks(totalTask);
    setTask('');
  };
  const deleteTask = id => {
    const updatedTasks = tasks.filter(task => {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };
  const clearTasks = () => {
    localStorage.removeItem('tasks');
    setTasks([]);
  };
  const updateTask = (id, updatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, task: updatedTask };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  return (
    <>
    <div className='bg'>
      <div className='container'>
      <h1 className='titleList'>TO DO LIST</h1>
      <Form
        handleChange={handleChange}
        task={task}
        addTask={addTask}
      />
      {tasks.length > 1 && (
        <button onClick={clearTasks}>Vaciar lista</button>
      )}
      <ul>
      {tasks.map(task => (
      <li key={task.id}>
        <Task
          id={task.id}
          task={task}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
        </li>
      ))}
      </ul>
      </div>
      </div>
    </>
  );
}
export default App;