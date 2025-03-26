import './App.css'
import {TodoListItem} from "./TodoListItem.tsx";

const App = () => {
  return (
      <div className="app">
        <TodoListItem title={'What to learn'}/>
        <TodoListItem tite={'Songs'}/>
        <TodoListItem title={'Books'}/>
      </div>
  )
}

export default App
