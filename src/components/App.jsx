import React, { Fragment, useState } from 'react'

function App() {
  // input text state
  const [toDo, setToDo] = useState({ heading: '', description: '' })

  // toDo list state
  const [items, setItems] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target
    setToDo({ ...toDo, [name]: value })
  }

  const handleSubmit = (event) => {
    toDo.description !== '' && setItems([toDo, ...items])
    setToDo({ heading: '', description: '' })
    event.preventDefault()
  }

  const { heading, description } = toDo

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='form'>
          <input
            onChange={handleChange}
            name='heading'
            value={heading}
            placeholder='To Do Heading (*)'
            type='text'
          />
          <input
            onChange={handleChange}
            name='description'
            value={description}
            placeholder='To Do Description'
            type='text'
          />
          <button type='submit'>
            <span>Add</span>
          </button>
        </div>
      </form>
      <div>
        <ul>
          {items.map((item) => (
            <Fragment key={items.indexOf(item)}>
              <h5> {item.heading} </h5>
              <li> {item.description} </li>
            </Fragment>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
