
import React, {useMemo, useState, useEffect } from "react";
import '../../styles/App.css'
//import Taskitem from "./components/Taskitem";
import Tasklist from "../../components/Tasklist";
import Navbar from "../../components/navbar/Navbar";

//import CompleteBtn from "./components/UI/button/CompleteBtn"

import NewTaskbtn from "../../components/UI/button/NewTaskbtn"
import TaskForm from "../../components/UI/TaskForm";
import MyModal from "../../components/my modal/MyModal";
import myImage from "./down-btn.svg";
import TaskFilter from "../../components/TaskFilter";
import db from "../../app/db/firestore";
import { collection, getDocs } from "firebase/firestore";


function Tasks() {

  const currentDate =  Date()
    const [tasks, setTasks] = useState(
       [
        //    {id: 1, title:"Welcome to DO App!", valueTime: currentDate, body: "Sample task, tap to edit task. You can also delete task by pressing the task. then click on the delete icon. "},
        //    {id: 2, title:"Javascript 2", valueTime: currentDate, body: "Description"},
        ]
    )
   
    const [doneTasks, setDoneTasks] = useState ([

    ])
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', query: ''})
    


    useEffect(() => {
      const getToDOItems = async() => {
        const snapShot = await getDocs(collection(db, "to-do-items"));
        const documents = snapShot.docs.map(item => item.data())
        const toDoitems = documents.map(item => {return {...item, id: item.id.toMillis(), valueTime: item.valueTime.toMillis()}})
        setTasks(toDoitems)
      }
      getToDOItems();
    }, []
    )
   
    const sortedTask = useMemo(()=>{
      if(filter.sort){
         if(filter.sort == "valueTime") {
          return [...tasks].sort((a,b)=> a[filter.sort] - (b[filter.sort]))
         }
        return [...tasks].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
      }
      return tasks;
    },[filter.sort, tasks]);

    const sortedAndSearchedTask = useMemo(()=>{
       
        return sortedTask.filter(task => task.title.toLowerCase().includes(filter.query.toLowerCase()))
    },[filter.query, sortedTask] )  

    const createTask = (newTask) => {
        setTasks([...tasks,newTask])
        setModal(false)
    }

    const completeTask = (task) => {
      setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
      setDoneTasks(prevDoneTasks => [...prevDoneTasks, task]);
    }
    
    const remove = (task) => {
      setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
    }

    const [show, setShow] = useState(true);

    
   return (
    
    <div className="App">
       <Navbar/>
      <div className="fixed-top">
          <NewTaskbtn onClick={()=> setModal(true)}/>
             <MyModal visible={modal} setVisible={setModal}> 
               <TaskForm create={createTask}/>
             </MyModal>
          <TaskFilter 
             filter={filter}
             setFilter={setFilter}
           />
      </div>
      
      <Tasklist remove={remove} complete={completeTask} tasks={sortedAndSearchedTask} title = "In progress"/>
      <div className="done-menu">
        <button className="done-btn" onClick={() => setShow((s) => !s)}>
          <img src={myImage} alt="down" />   Done
        </button>
         <div style={{ display: show ? "block" : "none" }}>
          <Tasklist tasks={doneTasks} isDoneList={true} title="Done" /> 
         </div>
      </div>

      
    </div>

  )
 
}

export default Tasks;


//