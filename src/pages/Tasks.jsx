
import React, {useMemo, useState } from "react";
import '../styles/App.css'
//import Taskitem from "./components/Taskitem";
import Tasklist from "../components/Tasklist";

//import CompleteBtn from "./components/UI/button/CompleteBtn"

import NewTaskbtn from "../components/UI/button/NewTaskbtn"
import TaskForm from "../components/UI/TaskForm";
import MyModal from "../components/my modal/MyModal";

import TaskFilter from "../components/TaskFilter";


function Tasks() {

  
    const [task, setTask] = useState(
        [
          {id: 1, title:"Welcome to DO App!", time: " ", body: "Sample task, tap to edit task. You can also delete task by pressing the task. then click on the delete icon. "},
          {id: 2, title:"Javascript 2", valueTime: " ", body: "Description"},
        ]
    )
   

    
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', query: ''})

   
    const sortedTask = useMemo(()=>{
      console.log('its working')
      if(filter.sort){
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


