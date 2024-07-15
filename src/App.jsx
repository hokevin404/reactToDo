// Import components
import Heading from './components/Heading';
import ToDoAdd from './components/ToDoAdd';
import ToDoList from './components/ToDoList';

// Import modules
import { useState} from 'react';
import './App.css'

function App() {
  const [todo, setToDo] = useState(null);

  return (
    <>
      <Heading />
      <ToDoAdd />
      <ToDoList />
    </>
  )
}

export default App
