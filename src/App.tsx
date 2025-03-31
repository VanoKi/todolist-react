import './App.css';
import {TodoListItem} from "./TodoListItem.tsx";
import {useState} from "react";

const Day = new Date()

export type Task = {
  id: number
  title: string
  isDone: boolean
}

const App = () => {
  console.log('App render')
  const [tasks, setTasks]= useState<Task[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'TypeScript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
  ])

  const [filter, setFilter] = useState<any>('all')
  let filteredTasks: Task[] = tasks
  if (filter === 'all') {
    // setFilter(tasks)
    filteredTasks = tasks
  }
  if (filter === 'active') {
    filteredTasks = tasks.filter( task => !task.isDone)
  }
  if (filter === 'Completed') {
    filteredTasks = tasks.filter( task => task.isDone)
  }

  // let filtredTasks = tasks
  // if (filter === 'active') {
  //   filtredTasks = tasks.filter(task => !task.isDone)
  // }
  // if (filter === 'completed') {
  //   filtredTasks = tasks.filter(task => task.isDone)
  // }

  function deleteTask(taskId: number) {
    const filtredTasks = tasks.filter( task => task.id !== taskId)
    console.log(filtredTasks)
    setTasks(filtredTasks)
  }
  return <div className="app">
    <TodoListItem
        title={'What to learn'}
        tasks={filteredTasks}
        date={String(Day.toLocaleDateString())}
        deleteTask={deleteTask}
    />
  </div>
}

export default App
