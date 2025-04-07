import {FilterValues, Task} from "./App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    title: string
    tasks: Task[]
    date?: string
    deleteTask: (taskID: number) => void
    changeFilter: (value: FilterValues) => void
    createTask: (title: string) => void
}

export const TodoListItem = ({ title, tasks, date, deleteTask, changeFilter, createTask }: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button title={'+'} onClick={() => createTask('new task')}/>
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

