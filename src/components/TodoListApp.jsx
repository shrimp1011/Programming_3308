import TodoItemEmpty from './TodoItemEmpty.jsx'
import Button from './Button.jsx'
import Checkbox from './CheckBox.jsx'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

function TodoListApp() {
    const [todos, setTodos]= useState([]);
    const addTodo = (text) => setTodos((todos) => [
        ...todos, 
        new Todo(text)
    ])
}
const [count, setCount] = useState(0)
// count 정수.32비타값
// 32비트가 바뀌면 새로 업데이트
// setCount(count+1): 실행하려고 예약할 때 count 값 가져옴 (미리 가져올 수 있음)
// setCount((count)=>count+1) : 실제 실행될 때 count 값 가져옴
// const[todosk setTodos] = useState([])
// todos 덩어리. 실제 값은 딴곳. 위치만 있음. 32비트 주소. 
// setTodos((todos)=> [...todos, new Todo(text)])
function TodoListApp() {
    return (
        <div className="todo">
            <TodoHeader/>
            <TodoAdder addTodo={addTodo}/>
            <TodoList todos={todo}/>
            {/* <h1 className="todo__title">No Think, Do It.</h1>
            <form className="todo__form">
                <input type="text" placeholder="할 일을 입력하세요." className="todo__input" />
                <Button type="submit" className="todo__button todo__button--add">Add</Button>
            </form>
            <ul className="todo__list">
                <TodoItemEmpty />
                <li className="todo__item todo__item--complete">
                    <Checkbox id="1" />
                    <Button className="todo__button todo__button--edit">✏️</Button>
                    <Button className="todo__button todo__button--delete">❌</Button>
                </li>
            </ul>
            <TodoHeader />
            <TodoAdder />
            <TodoList /> */}
        </div>
    )
}