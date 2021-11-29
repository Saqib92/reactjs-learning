import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  }

  const [tasks, setTasks] = useState([]);

  const deleteTask = async (id) => {
    // console.log('delete event', id);
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((e) => e.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((val) =>
        val.id == id ? { ...val, reminder: !val.reminder }
          : val)
    )
  }

  const addNewTask = async (obj) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    })

    const data = await res.json();

    setTasks([...tasks, data]);
    // const id = tasks.length + 1;
    // const newTask = { id, ...obj };
    // setTasks([...tasks, newTask]);
  }

  const showForm = () => {
    setToggleForm(!toggleForm);
  }

  return (
    <Router>
      <div className="container">
        <Header showForm={showForm} showValue={toggleForm} />

        <Routes>
          <Route path="/" exact element={
            <>
              {
                toggleForm &&
                <AddTask addNewTask={addNewTask} />
              }
              {
                tasks.length > 0 ?
                  <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
                  :
                  'No Task Available'
              }

            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        
        <Footer />

      </div>
    </Router>
  );
}

export default App;