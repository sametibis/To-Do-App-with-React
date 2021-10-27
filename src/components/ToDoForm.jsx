import React, { useState } from 'react'

const ToDoForm = ({ handleSubmit }) => {
  // input text state
  const [toDo, setToDo] = useState({ heading: '', description: '' })

  const { heading, description } = toDo

  const handleChange = (event) => {
    const { name, value } = event.target

    setToDo({ ...toDo, [name]: value })
  }

  return (
    <div className='form'>
      <input
        onChange={handleChange}
        name='heading'
        value={heading}
        placeholder='To Do Heading '
        type='text'
      />
      <input
        onChange={handleChange}
        name='description'
        value={description}
        placeholder='To Do Description (*)'
        type='text'
      />
      <button
        onClick={() => {
          handleSubmit(toDo)
          setToDo({ heading: '', description: '' })
        }}
      >
        <span>Add</span>
      </button>
    </div>
  )
}

export default ToDoForm
