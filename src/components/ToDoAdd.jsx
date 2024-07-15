import React from 'react'

function ToDoAdd() {
  return (
    <div className='todoAdd'>
      <input type='text' name='todoAdd' className='todoAdd' placeholder='Add Task' />
      <input type='submit' value="submit" />
    </div>
  )
}

export default ToDoAdd