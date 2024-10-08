
import React, {useMemo, useState, useEffect } from "react";
import '../../styles/App.css'
//import Taskitem from "./components/Taskitem";
import Tasklist from "../../components/Tasklist";
import Navbar from "../../components/navbar/Navbar";

//import CompleteBtn from "./components/UI/button/CompleteBtn"
import LogOutbtn from "../../components/UI/button/LogOutbtn"
import NewTaskbtn from "../../components/UI/button/NewTaskbtn"
import TaskForm from "../../components/UI/TaskForm";
import MyModal from "../../components/my modal/MyModal";
import downBtn from "./down-btn.svg";
import upBtn from "./up-btn.svg"
import TaskFilter from "../../components/TaskFilter";
import db from "../../app/db/firestore";
import { collection, getDocs } from "firebase/firestore";
import { createTask, removeTask, completeTask, fetchCompletedTasks } from "../../services/taskService";
import { signOut } from 'firebase/auth';
import { auth } from "../../app/auth/firebase";
import { useNavigate } from 'react-router-dom';



function Tasks() {

  const currentDate =  Date()
    const [tasks, setTasks] = useState([])
    const [doneTasks, setDoneTasks] = useState ([])
    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [user, setUser] = useState({})
    
    const navigate = useNavigate();

    useEffect(() => {
      const getToDOItems = async() => {
        const snapShot = await getDocs(collection(db, "to-do-items"));
        const documents = snapShot.docs.map(item => item.data())
        const toDoitems = documents.map(item => 
          {return {...item, id: item.id, valueTime: item.valueTime.toMillis()}
        });
        setTasks(toDoitems);
        const firebaseCompleted = await fetchCompletedTasks();
        setDoneTasks(firebaseCompleted);
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

    const handleCreateTask = async (newTask) => {
      const task = await createTask(newTask.title, newTask.body, newTask.valueTime);
      if (task) {
        setTasks(prevTasks => [...prevTasks, task]);
        setModal(false);
      }
    }

    // const createTask = (newTask) => {
    //     setTasks([...tasks,newTask])
    //     setModal(false)
    // }
    const complete = async (task) => {
      await completeTask(task.id);
      setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
      setDoneTasks(prevDoneTasks => [...prevDoneTasks, task]);
    }
    // const completeTask = (task) => {
    //   setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
    //   setDoneTasks(prevDoneTasks => [...prevDoneTasks, task]);
    // }
    
    const remove = async (task) => {
      await removeTask(task.id);
      setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
    }

    // const remove = (task) => {
    //   setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
    // }

    const [show, setShow] = useState(true);

    const logoutUser = () => {
      localStorage.removeItem('currentUser');
        sessionStorage.removeItem('currentUser');
        signOut(auth)
          .then(() => {
            setUser(null);
              navigate('/login');
          })
          .catch((error) => {
            console.error('error sign out', error);
          });
    };
   return (
    
    <div className="App">
        <LogOutbtn onClick={logoutUser}/>
        <Navbar/>
      <div className="fixed-top">
          <NewTaskbtn onClick={()=> setModal(true)}/>
             <MyModal visible={modal} setVisible={setModal}> 
               <TaskForm create={handleCreateTask}/>
             </MyModal>
          <TaskFilter 
             filter={filter}
             setFilter={setFilter}
           />
      </div>
      <div className="inProgressContainer">
        <Tasklist remove={remove} complete={complete} tasks={sortedAndSearchedTask}/>
      </div>
      <div className="done-menu">
        <button className="done-btn" onClick={() => setShow((s) => !s)}>
          <img src={downBtn} alt="down"style={{ display: show ? "none" : "block" }}/>
          <img src={upBtn} alt="up" style={{ display: show ? "block" : "none" }}/>
           Done
        </button>
         <div style={{ display: show ? "block" : "none" }}>
          <Tasklist tasks={doneTasks} isDoneList={true} /> 
         </div>
      </div>

      
    </div>

  )
 
}

export default Tasks;


