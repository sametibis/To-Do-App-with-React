import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoItem from './ToDoItem'

function App() {
  // toDo list state
  const [items, setItems] = useState([])

  const handleSubmit = (toDo) => {
    if (toDo.heading === '') {
      toDo.heading = 'Untitled'
    }
    toDo.description !== '' && setItems([toDo, ...items])
  }

  const deleteItem = (id) => {
    setItems(items.filter((item, index) => index !== id))
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <ToDoForm handleSubmit={handleSubmit} />
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              deleteItem={deleteItem}
              item={item}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
