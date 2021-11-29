import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        title: 'Task 1',
        description: 'This is task description',
        day: '2021-11-30',
        reminder: true
    },
    {
        id: 2,
        title: 'Task 2',
        description: 'This is task description',
        day: '2021-12-01',
        reminder: false
    },
    {
        id: 3,
        title: 'Task 3',
        description: 'This is task description',
        day: '2021-12-03',
        reminder: true,

    },
    {
        id: 4,
        title: 'Task 4',
        description: 'This is task description',
        day: '2021-12-05',
        reminder: false
    },
]);
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;