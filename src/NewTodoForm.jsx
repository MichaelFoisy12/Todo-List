import { useState } from "react"
//{onSubmit} destructure onSubmit property 
export function NewTodoForm({onSubmit})  {
    
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)
        setNewItem("")
    } 
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input value={newItem} 
            onChange={e => setNewItem(e.target.value)} // New value on input, set as new item
            type="text"
            id="item" 
            />
        </div>
        <button className="btn">Add</button>
    </form>
    )
}