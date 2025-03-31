import './App.css'
import {TodoListItem} from "./TodoListItem.tsx";
const Day = new Date()

export type Task = {
  id: number
  title: string
  isDone: boolean
}

const App = () => {
  let tasks1: Task[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
    { id: 4, title: 'Redux', isDone: false },
    { id: 5, title: 'TypeScript', isDone: false },
    { id: 6, title: 'RTK query', isDone: false },
  ]

  function deleteTask(taskId: number) {
    alert(taskId)
  }

  return <div className="app">
    <TodoListItem
        title={'What to learn'}
        tasks={tasks1}
        date={String(Day.toLocaleDateString())}
        deleteTask={deleteTask}
    />
  </div>
}

export default App
