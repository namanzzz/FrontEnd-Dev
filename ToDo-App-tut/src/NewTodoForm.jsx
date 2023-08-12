
import { useState } from "react"

export function NewTodoForm({onSubmit}){
    const  [newItem, setnewItem] = useState("")

      function handleSubmit(event){
      event.preventDefault()
    
        if(newItem === "") return;
        onSubmit(newItem)

      setnewItem("")

}

   return ( 
   <form onSubmit={handleSubmit} className='new-item-form'>
      <div className="form-row">
        <label htmlFor='item' className="new-task-heading">New Task</label>
        <input value={newItem} onChange={event => setnewItem(event.target.value)} type="text" id='item' />
      </div>

      <button className='btn'>Add</button>
    </form>
   )
}