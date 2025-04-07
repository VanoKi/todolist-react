import {FilterValues, Task} from "./App.tsx";
import {Button} from "./Button.tsx";
import * as React from "react";
import {useState} from "react";

type Props = {
    title: string
    tasks: Task[]
    date?: string
    deleteTask: (taskID: string) => void
    changeFilter: (value: FilterValues) => void
    createTask: (title: string) => void
}

export const TodoListItem = ({ title, tasks, date, deleteTask, changeFilter, createTask }: Props) => {

    const taskInputRef = React.useRef<HTMLInputElement>(null)
    const [taskTitle, setTaskTitle] = useState('')
    const createTaskHandler = () => createTask(taskTitle)
    const isAddBtnDisabled = !taskTitle || taskTitle.length > 10

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input ref={taskInputRef}
                       placeholder={'enter the text'}
                       value={taskTitle}
                       onChange={(e) => setTaskTitle(e.currentTarget.value)}
                       onKeyDown={ (e) => {
                           if (e.key === 'Enter' && !isAddBtnDisabled) {
                               createTaskHandler()
                       }
                       }
                }
                />
                <Button
                    title={'+'}
                    disabled={isAddBtnDisabled}
                    onClick={createTaskHandler}
                />
                {taskTitle && <div>Max title length is 10 characters</div>}
                {taskTitle.length > 10 && <div style={{color: "red"}}>title length is more then 10 characters</div>}
            </div>
            {tasks.length === 0 ? (
                <p>There aren't tasks</p>
            ) : (<ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                            <Button title={'x'} onClick={() => deleteTask(task.id)} />
                        </li>
                    )
                })}
            </ul>)}
            <div>
                <Button title={'All'} onClick={() => changeFilter('all')}/>
                <Button title={'Active'} onClick={() => changeFilter('active')}/>
                <Button title={'Completed'} onClick={() => changeFilter('completed')}/>
            </div>
            <div>{date}</div>
        </div>
    );
};

