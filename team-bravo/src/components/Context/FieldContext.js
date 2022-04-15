import React, { createContext, useState, useEffect } from "react";
import service from "../../services/service";

export const FieldContext = createContext();

function FieldContextProvider(props) {

    const [finalElems, setFinalElems] = useState([])

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
        setFinalElems([...finalElems, elem])
        console.log(elem)
        
        service.createType(elem).then((response) =>{
          console.log(response.data)
        }).then(error =>{
          console.log(error)
        })
    }

    return (
        <FieldContext.Provider value={{finalElems, addElem}}>
            {props.children}
        </FieldContext.Provider>
    )
}

export default FieldContextProvider