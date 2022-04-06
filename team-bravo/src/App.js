import logo from './logo.png';
import './App.css';
import Sidebar from "./components/Sidebar/Sidebar"
import Modal from "./components/Modal/ModalComp"
import { useState } from 'react'
import MainPage from'./components/MainPage/MainPage'
import ModalComp from './components/Modal/ModalComp';
import { elementSelectorParser } from 'tailwindcss/lib/lib/resolveDefaultsAtRules';
import { SidebarData } from './components/Sidebar/Sidebardata';
import { useEffect } from 'react';

function App() {
  const [title,setTitle] = useState('');
  const [finalElems,setFinalElems] = useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setShow(true);
    setTitle(item)
  }
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setFinalElems(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:8080/api/v1/types')
    const data = await res.json()

    console.log(data)
    return data
  }

  const addElem = (elem) => {
    setShow(false)
    setFinalElems([...finalElems, elem])
  }
  return (
    <div className="App">
      {/* <Sidebar addElement={addElement} /> */}
      <Sidebar handleShow={handleShow}/>
      <MainPage data={finalElems}/>
      <ModalComp 
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
        onAdd={addElem}
        title={title}
      />
    </div>
  );
}

export default App;
