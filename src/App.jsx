import { useEffect, useState } from "react"
 import { NewTodoForm } from "./NewTodoForm" 
import "./styles.css"
import { TodoList } from "./TodoList"



export default function App() {
    // Rerender data for app.. use useState
    // Hook put at top of files
   
    // useState is checking local storage and getting value if exists, if it doesnt it defualts to empty array
    const [todos, setTodos] = useState(() => {
      const localValue = localStorage.getItem("ITEMS")
        if (localValue == null) return []

        return JSON.parse(localValue)
    })

    // Runs evertime we want our todos to change

    // Everytime we  modify our todos, run funciton and save new value to todos in local storage
    
    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todos)) // Storing todos in local storage
    }, [todos])

    // Update todo state
    function addTodo(title){
        // Modify existing function
        setTodos((currentTodos) => {
            return[
                ...currentTodos,
                { id: crypto.randomUUID(), title, completed: false },
            ]
        }) 

    }

    function toggleTodo(id, completed){
        setTodos(currentTodos => { 
            // Map through each todo, check to see if its the current id trying to toggle
            return currentTodos.map(todo => {
                if (todo.id === id){
                    return {...todo, completed}
                }

                return todo // If not matching current id as is with no changes
            })
        })
    }

    function deleteTodo(id){
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id) // id not equal to id keep it, otherwise remove it
        })
    }
    
return (
    <>
    <NewTodoForm onSubmit={addTodo} /> {/* rendering out like its normal html.. Then pass down prop */}
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
</>
)
}
