import {TodoItem } from "./TodoItem"
export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return ( 
     <ul className="list">
      {/* check if true to do something.. Short circuiting */}
        {todos.length === 0 && "No Todos"} 
        {/* retuns array */}
        {todos.map(todo => {
            return (
                <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}
                />
            )
        })}
    </ul>
  )
}