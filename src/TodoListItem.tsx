import {Task} from "./App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    title: string
    tasks: Task[]
    date?: string
    deleteTask: (taskID: number) => void
}

export const TodoListItem = ({ title, tasks, date, deleteTask }: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasks.length === 0 ? (
                <p>There aren't tasks</p>
            ) : (<ul>
                {tasks.map(task => {
                    return (
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={() => deleteTask(task.id)}>x</button>
                        </li>
                    )
                })}
            </ul>)}
            <div>
                <Button title={'All'} />
                <Button title={'Active'} />
                <Button title={'Completed'} />
            </div>
            <div>{date}</div>
        </div>
    );
};

