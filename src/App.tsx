import './App.css';
import {TodoListItem} from "./TodoListItem.tsx";
import {useState} from "react";
import {v1} from 'uuid';

const Day = new Date()

export type Task = {
  id: string
  title: string
  isDone: boolean
}
export type FilterValues = 'all'|'active'|'completed'

const App = () => {
  console.log('App render')
  const [tasks, setTasks]= useState<Task[]>([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
    { id: v1(), title: 'Redux', isDone: false },
    { id: v1(), title: 'TypeScript', isDone: false },
    { id: v1(), title: 'RTK query', isDone: false },
  ])
  const [filter, setFilter] = useState<FilterValues>('all')
  let filteredTasks: Task[] = tasks

  if (filter === 'active') {
    filteredTasks = tasks.filter( task => !task.isDone)
  }
  if (filter === 'completed') {
    filteredTasks = tasks.filter( task => task.isDone)
  }

  function deleteTask(taskId: string) {
    const filtredTasks = tasks.filter( task => {
      return task.id !== taskId;
    })
    console.log(filtredTasks)
    setTasks(filtredTasks)
  }

  const changeFilter = (filter: FilterValues) => {
    setFilter(filter)
  }

  const createTask = (title: string) => {
    // alert('creating task')
    setTasks([...tasks, {id: v1(), title, isDone: false}])
  }
  
  const changeTaskStatus = (taskId: string, newStatus: boolean) => {
    const newTasks = tasks.map( t => t.id === taskId ? {...t, isDone: !t.isDone} : t)
    setTasks(newTasks)
  }

  return <div className="app">
    <TodoListItem
        title={'What to learn'}
        tasks={filteredTasks}
        date={String(Day.toLocaleDateString())}
        deleteTask={deleteTask}
        changeFilter={changeFilter}
        createTask={createTask}
        changeTaskStatus={changeTaskStatus}
    />
  </div>
}

export default App
