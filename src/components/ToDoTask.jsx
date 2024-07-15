import React from 'react'

function ToDoTask() {
    return (
        <div>
            <li>
                <input type="checkbox" className="items" name="item1" value="Item1" />
                <label htmlFor="item1"> Item1</label>
                <button className='editButton'> Edit</button>
                <button className='deleteButton'> Delete</button>
            </li>
        </div>
    )
}

export default ToDoTask