
type Todo = {
    id: string;
    title: string;
    completed: boolean;
};

type TodoListProps = {
    todos: Todo[];
    toggleTodo: (id: string, completed: boolean) => void;
    deleteTodo: (id: string) => void;
}


export default function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
    return (
        <ul className="list">
            {todos.map((todo: Todo) => (
                <li key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                        {todo.title}
                    </label>
                    < button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}

        </ul>
    )
}