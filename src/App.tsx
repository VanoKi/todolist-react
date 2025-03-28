import './App.css'
import {TodoListItem} from "./TodoListItem.tsx";

export type Task = {
  id: number
  title: string
  isDone: boolean
}

const App = () => {
  const tasks1: Task[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'ReactJS', isDone: false },
  ]

  const tasks2: Task[] = [
    { id: 1, title: 'Hello world', isDone: true },
    { id: 2, title: 'I am Happy', isDone: false },
    { id: 3, title: 'Yo', isDone: false },
  ]
  return <div className="app">
    <TodoListItem title={'What to learn'} tasks={tasks1} date={String(new Date())}/>
    <TodoListItem title={'Fraces'} tasks={tasks2} />
  </div>
}

export default App
