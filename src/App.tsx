import './App.css'
import {useState} from 'react'
import {v1} from 'uuid'
// @ts-ignore
import {TodolistItem} from "./TodolistItem"

export type Task = {
  id: string
  title: string
  isDone: boolean
}

export type FilterValues = 'all' | 'active' | 'completed'

export type Todolist = {
  id: string
  title: string
  filter: FilterValues
}

export type TaskState = {
  [todolistId: string]: Task[]
}

export const App = () => {
  const todolistsId_1 = v1()
  const todolistsId_2 = v1()
  const [todolists, setTodolists] = useState<Todolist[]>([
    {id: v1(), title: 'what to learn', filter: 'all'},
    {id: v1(), title: 'what to buy', filter: 'all'},
    ]
  )

  const [filter, setFilter] = useState<FilterValues>('all')


  const [tasks, setTasks] = useState<TaskState>({
      [todolistsId_1]: [
        { id: v1(), title: 'HTML&CSS', isDone: true },
        { id: v1(), title: 'JS', isDone: true },
        { id: v1(), title: 'ReactJS', isDone: false },
      ],
      [todolistsId_2]: [
        { id: v1(), title: 'beer', isDone: true },
        { id: v1(), title: 'cheeps', isDone: true },
        { id: v1(), title: 'cola', isDone: false },
      ]
  })


  // const [tasks, setTasks] = useState<Task[]>([
  //   { id: v1(), title: 'HTML&CSS', isDone: true },
  //   { id: v1(), title: 'JS', isDone: true },
  //   { id: v1(), title: 'ReactJS', isDone: false },
  // ])

  const deleteTask = (taskId: string, todolistId: string) => {
    setTasks({...tasks, [todolistId]: tasks[todolistId].filter(task => {
      return task.id !== taskId
    })})
    //
    // const filteredTasks = tasks.filter(task => {
    //   return task.id !== taskId
    // })
    // setTasks(filteredTasks)
  }

  const changeFilter = (filter: FilterValues,  todolistId: string) => {
    setFilter(filter)
  }

  let filteredTasks = tasks
  if (filter === 'active') {
    filteredTasks = tasks.filter(task => !task.isDone)
  }
  if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.isDone)
  }

  const createTask = (title: string,  todolistId: string) => {
    const newTask = {id: v1(), title, isDone: false}
    // const newTasks = [newTask, ...tasks]
    setTasks({...tasks, [todolistId]: [...tasks[todolistId], newTask]})
  }

  const changeTaskStatus = (taskId: string, isDone: boolean,  todolistId: string) => {
    // const newState = tasks.map(task => task.id == taskId ? { ...task, isDone } : task)
    setTasks({...tasks, [todolistId]: tasks[todolistId].map(task => task.id == taskId ? { ...task, isDone } : task)})
  }

  return (
      <div className="app">
        <TodolistItem title="What to learn"
                      tasks={filteredTasks}
                      deleteTask={deleteTask}
                      changeFilter={changeFilter}
                      createTask={createTask}
                      changeTaskStatus={changeTaskStatus}
                      filter={filter}/>
      </div>
  )
}
