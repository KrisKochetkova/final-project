
import React, {useMemo, useState, useEffect } from "react";
import '../styles/App.css'
//import Taskitem from "./components/Taskitem";
import Tasklist from "../components/Tasklist";

//import CompleteBtn from "./components/UI/button/CompleteBtn"

import NewTaskbtn from "../components/UI/button/NewTaskbtn"
import TaskForm from "../components/UI/TaskForm";
import MyModal from "../components/my modal/MyModal";

import TaskFilter from "../components/TaskFilter";
import db from "../app/db/firestore";
import { collection, getDocs } from "firebase/firestore";


function Tasks() {

  const currentDate =  Date()
    const [task, setTask] = useState(
        [
          // {id: 1, title:"Welcome to DO App!", valueTime: currentDate, body: "Sample task, tap to edit task. You can also delete task by pressing the task. then click on the delete icon. "},
          // {id: 2, title:"Javascript 2", valueTime: currentDate, body: "Description"},
        ]
    )
   

    
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', query: ''})

    useEffect(()=>
      {
      const getToDOItems = async() => {
        const snapShot = await getDocs(collection(db, "to-do-items"));
        const documents = snapShot.docs.map(item => item.data())
        const toDoitems = documents.map(item => {return {...item, id: item.id.toMillis(), valueTime: item.valueTime.toMillis()}})
        setTask(toDoitems)
      }
      getToDOItems();
    }, []
    )
   
    const sortedTask = useMemo(()=>{
      if(filter.sort){
         if(filter.sort == "valueTime") {
          return [...task].sort((a,b)=> a[filter.sort] - (b[filter.sort]))
         }
        return [...task].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
      }
      return task;
    },[filter.sort, task]);

    const sortedAndSearchedTask = useMemo(()=>{
       
        return sortedTask.filter(task => task.title.toLowerCase().includes(filter.query.toLowerCase()))
    },[filter.query, sortedTask] )  

    const createTask = (newTask) => {
        setTask([...task,newTask])
        setModal(false)
    }

    
   return (
    
    <div className="App">
    
      <NewTaskbtn onClick={()=> setModal(true)}/>
        <MyModal visible={modal} setVisible={setModal}> 
            <TaskForm create={createTask}/>
        </MyModal>
      <TaskFilter 
        filter={filter}
        setFilter={setFilter}
      />
      <Tasklist task={sortedAndSearchedTask} title = "Post List 1"/>
    </div>

  )
 
}

export default Tasks;


