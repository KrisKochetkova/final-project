import React, { useState }  from 'react';
import Mybutton from "./button/Mybutton";
import Myinput from "./input/Myinput";
import Timebutton from "./button/Timebutton";
import moment from 'moment';

    const TaskForm = ({create}) => {
        const [valueTime, setValueTime] = useState('');
        const [isVisible, setIsVisible] = useState(false);
        const [task, setTask] = useState({title: '',valueTime:'', body: ''})
        function handleChange(e) {
                setValueTime(e.target.value);
               
              }
        function handleClick(e) {
                e.preventDefault();
                setIsVisible(!isVisible);
         }
        const CreateNewTask = (e) => {
            e.preventDefault()
            console.log("valueTime", valueTime)
            let formattedTime = moment(valueTime).format('ddd MMM D HH:mm');
            console.log("formattedTime", formattedTime)
            const newTask = {
                ...task, id: Date.now(), valueTime: formattedTime
            }
            create(newTask)
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


