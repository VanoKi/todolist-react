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

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input ref={taskInputRef}
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.currentTarget.value)}/>
                <Button title={'+'} onClick={() => {
                    if (taskInputRef.current) {
                        createTask(taskTitle)
                        // taskInputRef.current.value = ""
                }}}/>
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

