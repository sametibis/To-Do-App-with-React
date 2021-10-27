import React, { Fragment } from 'react'

const ToDoItem = ({ item, id, deleteItem }) => {
  return (
    <Fragment>
      <h5> {item.heading} </h5>
      <div style={{ display: 'flex ' }}>
        <div>
          <li> {item.description} </li>
        </div>
        <div>
          <button
            onClick={() => {
              deleteItem(id)
            }}
            style={{
              marginLeft: 'auto',
              color: 'white',
            }}
          >
            <span style={{ backgroundColor: 'red' }}>X</span>
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default ToDoItem
