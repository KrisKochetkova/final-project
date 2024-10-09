import React, { useState }  from 'react';
import Mybutton from "./button/Mybutton";
import Myinput from "./input/Myinput";
import Timebutton from "./button/Timebutton";


    const TaskForm = ({create}) => {
        const [valueTime, setValueTime] = useState('');
        const [isVisible, setIsVisible] = useState(false);
        const [task, setTask] = useState({title: '',valueTime:'', body: ''});

        function handleChange(e) {
                setValueTime(e.target.value);
               
              }
        function handleClick(e) {
                e.preventDefault();
                setIsVisible(!isVisible);
         }
        const CreateNewTask = async (e) => {
            e.preventDefault()
            await create(task.title, task.body, valueTime); 
            console.log("Creating task with:", task.title, task.body, valueTime);
            
             setTask({ title: '', body: '' });
             setValueTime('');
            const newTask = {
                ...task, 
                id: Date.now(), 
                valueTime: new Date(valueTime) || new Date(), 
            }
            await create(newTask)
            setTask({title: '',valueTime:'', body: ''})
        }
        
        return (
            <form>
                <Myinput
                    value={task.title}
                    onChange={e => setTask({...task, title: e.target.value})}
                    type="text"
                    placeholder="Title of your task"
                />
                <Myinput
                    value={task.body}
                    onChange={e => setTask({...task, body: e.target.value})}
                    type="text"
                    placeholder="Describe your task"
                />
                <div className="btn-container">
                <div className="time-date-reminder">
                     <Timebutton onClick = {handleClick}>Set Reminder</Timebutton>
                         {isVisible && (
                            <input className="time-date-input" type="datetime-local" value={valueTime} onChange={handleChange}/>
                        )}
              </div>
              <Mybutton onClick={CreateNewTask}>Create Task</Mybutton>
             </div>
            </form>
        );
    };


export default TaskForm;





