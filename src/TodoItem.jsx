export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li>  {/* Use key to know which todo is changing. Performance optimization  */}
            <label>
                <input type="checkbox" checked={
                    completed}
                onChange={e => toggleTodo(id, e.target.checked)} 
                />
                {title}
            </label>
            <button
                onClick={() => deleteTodo(id)}
                className="btn btn-danger">Delete</button>
        </li>
    )
}