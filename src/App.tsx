import './App.css'
import {TodoListItem} from "./TodoListItem.tsx";
import {useState} from "react";
const Day = new Date()

export type Task = {
  id: number
  title: string
  isDone: boolean
}

const App = () => {
  const [tasks, setTasks]= useState<Task[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'TypeScript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
  ])

  function deleteTask(taskId: number) {
    const filtredTasks = tasks.filter( task => {
      return task.id !== taskId
    })
    setTasks(filtredTasks)
  }

  return <div className="app">
    <TodoListItem
        title={'What to learn'}
        tasks={tasks}
        date={String(Day.toLocaleDateString())}
        deleteTask={deleteTask}
    />
  </div>
}

export default App
