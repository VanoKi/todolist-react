import {Task} from "./App.tsx";

type Props = {
    title: string
    tasks: Task[]
}

export const TodoListItem = ({ title, tasks }: Props) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <input type="checkbox" checked={tasks[0].isDone}/> <span>HTML&CSS</span>
                </li>
                <li>
                    <input type="checkbox" checked={tasks[1].isDone}/> <span>JS</span>
                </li>
                <li>
                    <input type="checkbox" checked={tasks[2].isDone}/> <span>React</span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

