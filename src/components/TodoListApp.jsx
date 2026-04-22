import TodoItemEmpty from './TodoItemEmpty.jsx'
import Button from './Button.jsx'
import Checkbox from './CheckBox.jsx'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'
class Todo {
    constructor(text) {
        this.id = Date.now();   //할일 id: 고유의 값 == new Date().getTime()
        this.text = text;       //할일의 내용
        this.isCompleted = false; //할일 완료 여부
    }
}

function TodoListApp() {
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => setTodos((todos) => [
        //이전 todos 복사
        ...todos,
        //newTodo 만들어서
        //뒤에 추가하자
        new Todo(text)
    ]);
    const toggleTodo = (id) => {
        setTodos((todos) =>
                todos.map((todo)=>
                    todo.id === id? {...todo, isCompleted: !todo.isCompleted} : todo
                ))
    }

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
    )
}

