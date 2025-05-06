import {type ChangeEvent} from 'react'
import type {FilterValues, Task} from './App'
// import {Button} from './Button'
import {CreateItemForm} from "./CreateItemForm.tsx";
import {EditableSpan} from "./EditableSpan.tsx";
import Button from '@mui/material/Button'

type Props = {
  todolistId: string
  title: string
  tasks: Task[]
  filter: FilterValues
  deleteTask: (taskId: string, todolistId: string) => void
  changeFilter: (filter: FilterValues, todolistId: string) => void
  createTask: (title: string, todolistId: string) => void
  changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
  deleteTodoList: (todolistId: string) => void

  changeTaskTitle: (todolistId: string,
                    taskId: string,
                    title: string) => void
  changeTodoListTitle: (todolistId: string, title: string) => void
}

export const TodolistItem = (props: Props) => {
  const {
    todolistId,
    title,
    tasks,
    filter,

    deleteTask,
    changeFilter,
    createTask,
    changeTaskStatus,
    deleteTodoList,

    changeTaskTitle,
    changeTodoListTitle
  } = props

  const createTaskHandler = (title: string) => {
      createTask(title, todolistId)
  }

  const changeTodolistTitleHandler = (title: string) => {
    changeTodoListTitle(todolistId, title)
  }


  return (
      <div>
        <h3>
          <EditableSpan value={title} onChange={changeTodolistTitleHandler}/>
          <Button title={'x'} onClick={()=>deleteTodoList(todolistId)}/>
        </h3>
        <CreateItemForm
          onCreateItem={createTaskHandler}
        />
        {tasks.length === 0 ? (
            <p>Тасок нет</p>
        ) : (
            <ul>
              {tasks.map(task => {
                const deleteTaskHandler = () => {
                  deleteTask(task.id, todolistId)
                }

                const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                  const newStatusValue = e.currentTarget.checked
                  changeTaskStatus(task.id, newStatusValue, todolistId)
                }

                const ChangeTaskTitleHandler = (title: string) => {
                  changeTaskTitle(todolistId, task.id, title)
                }

                return (
                    <li key={task.id} className={task.isDone ? 'is-done' : ''}>
                      <input type="checkbox" checked={task.isDone}
                             onChange={changeTaskStatusHandler}/>
                      {/*<span>{task.title}</span>*/}
                      <EditableSpan value={task.title} onChange={ChangeTaskTitleHandler}/>
                      <Button title={'x'} onClick={deleteTaskHandler}/>
                    </li>
                )
              })}
            </ul>
        )}
        <div>
          <Button
            variant="contained"
            size='small'
            disableElevation
            onClick={() => changeFilter('all', todolistId)}
          >
            All
          </Button>
          <Button
            variant="contained"
            size='small'
            disableElevation
            onClick={() => changeFilter('active', todolistId)}
            sx={{m: '0 5px'}}
          >
            Active
          </Button>
          <Button
            variant="contained"
            size='small'
            disableElevation
            onClick={() => changeFilter('completed', todolistId)}
          >
            Completed
          </Button>
        {/*  <Button className={filter === 'all' ? 'active-filter' : ''}*/}
        {/*          title={'All'}*/}
        {/*          onClick={() => changeFilter('all', todolistId)}/>*/}
        {/*  <Button className={filter === 'active' ? 'active-filter' : ''}*/}
        {/*          title={'Active'}*/}
        {/*          onClick={() => changeFilter('active', todolistId)}/>*/}
        {/*  <Button className={filter === 'completed' ? 'active-filter' : ''}*/}
        {/*          title={'Completed'}*/}
        {/*          onClick={() => changeFilter('completed', todolistId)}/>*/}
        {/*</div>*/}
      </div>
      </div>
  )
}
