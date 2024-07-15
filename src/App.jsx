// Import components
import Heading from './components/Heading';

// Import modules
import { useState } from 'react';
import './App.css'

function App() {

  return (
    <>
      <Heading />
      <div className='todoAddContainer'>
        <input type='text' name='todoAdd' className='todoAdd' placeholder='Add Task' />
        <input type='submit' value="submit" />
      </div>
      <ul className='appList'>
        <li>
          <input type="checkbox" className="items" name="item1" value="Item1" />
          <label htmlFor="item1"> Item1</label>
          <button className='editButton'> Edit</button>
          <button className='deleteButton'> Delete</button>
        </li>
        <li>
          <input type="checkbox" className="items" name="item2" value="Item2" />
          <label htmlFor="item2"> Item2</label>
          <button className='editButton'> Edit</button>
          <button className='deleteButton'> Delete</button>
        </li>
        <li>
          <input type="checkbox" className="items" name="item3" value="Item3" />
          <label htmlFor="item3"> Item3</label>
          <button className='editButton'> Edit</button>
          <button className='deleteButton'> Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App
