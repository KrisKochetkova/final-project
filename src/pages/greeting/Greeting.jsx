import React, {useState} from 'react';
import styles from './Greeting.module.css'
import CheckBoxbtn from '../../components/UI/button/CheckBoxbtn';
import classes from '../../components/UI/button/CheckBoxbtn.module.css'
import Mybutton from '../../components/UI/button/Mybutton';

const Greeting = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < 2) {
      setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className={styles.container}>
            {currentIndex === 0 && (
            <div className={styles.greetingContentBox}>
                <div className={styles.greetingCard}>
                    <h2 className={styles.greetingHeader}>What is Todo List?</h2>
                    <h3 className={styles.greetingSubHeader}>Brief Information:</h3>
                    <div className={styles.greetingBody}>
                        <div className={styles.greetingItem}>
                            <p className={styles.greetingP}>
                            Todo List is a task management app that helps you organize your day and remember important tasks.
                            </p>
                        </div>
                        <div className={styles.greetingItem}>
                            <p className={styles.greetingP}>
                            You can add, edit, and delete tasks, set reminders and priorities, and track your progress. 
                            </p>
                        </div>
                    </div>
                    <div className={styles.greetengBtns}>
                        <button className={styles.nextBtn} onClick={handleNext}>Next »</button>
                    </div>
                </div>
            </div>
            )}
            {currentIndex === 1 && (
            <div className={styles.greetingContentBox}>
                <div className={styles.greetingCard}>
                    <h2 className={styles.greetingHeader}>How to Use Todo List?</h2>
                    <h3 className={styles.greetingSubHeader}>Key Features:</h3>
                    <div className={styles.greetingBody}>
                        <div className={styles.greetingItem}>
                            <p className={styles.greetingP}>
                                <h5>Adding Tasks: </h5> 
                                Click the "Add" button to create a new task.
                            </p>
                        </div>
                        <div className={styles.greetingItem}>
                            <p className={styles.greetingP}>
                                <h5>Editing Tasks: </h5>
                                Select a task and click "Edit" to make changes.
                            </p>
                        </div>
                        <div className={styles.greetingItem}>
                            <p className={styles.greetingP}>
                                <h5> Deleting Tasks: </h5>
                                Select a task and click "Delete" to remove it from the list.
                            </p>
                        </div>
                        <div className={styles.greetingItem}>
                            <p className={styles.greetingP}>
                                <h5>Setting Priorities: </h5>
                                Choose a priority level for each task (low, medium, high).
                            </p>
                        </div>
                        <div className={styles.greetingItem}>
                            <p className={styles.greetingP}>
                                <h5>Setting Reminders: </h5>
                                Specify when you want to receive reminders.
                            </p>
                        </div>
                    </div>
                    <div className={styles.greetengBtns}>
                        <button className={styles.prevBtn} onClick={handlePrev}>« Previous</button>
                        <button className={styles.nextBtn} onClick={handleNext}>Next »</button>
                    </div>
                </div>
            </div>
            )}
            {currentIndex === 2 && (
            <div className={styles.greetingContentBox}>
                <div className={styles.greetingCard}>
                    <h2 className={styles.greetingHeader}>Notification Permissions</h2>
                    <h3 className={styles.greetingSubHeader}>Setting Up Notifications</h3>
                    <div className={styles.greetingBody}>
                        <div className={styles.greetingItem}>
                            <h5>Allow notifications to be sent to your email: </h5>
                            <CheckBoxbtn >
                                <p className={classes.checkBoxText}>I agree to receive notifications about new tasks and reminders.</p>
                            </CheckBoxbtn>
                        </div>
                        <div className={styles.greetingItem}>
                            <h5>Choose a time for notifications: </h5>
                            <h6>How long before a task's deadline do you want to receive notifications?</h6>
                            <CheckBoxbtn >
                                <p className={classes.checkBoxText}>10 minutes</p>
                            </CheckBoxbtn>
                            <CheckBoxbtn >
                                <p className={classes.checkBoxText}>30 minutes</p>
                            </CheckBoxbtn>
                            <CheckBoxbtn >
                                <p className={classes.checkBoxText}>1 hour</p>
                            </CheckBoxbtn>
                            <CheckBoxbtn >
                                <p className={classes.checkBoxText}>2 hours</p>
                            </CheckBoxbtn>
                        </div>
                        <div className={styles.greetingItem}>
                            <h5>Type of notifications: </h5>
                            <h6>Choose which tasks you want to track: </h6>
                            <CheckBoxbtn >
                                <p className={classes.checkBoxText}>All tasks</p>
                            </CheckBoxbtn>
                            <CheckBoxbtn >
                                <p className={classes.checkBoxText}>Only priority tasks</p>
                            </CheckBoxbtn>
                        </div>
                    </div>
                    <div className={styles.greetengBtns}>
                        <button className={styles.prevBtn} onClick={handlePrev}>« Previous</button>
                        <div className={styles.saveSet}>
                            <Mybutton className={styles.saveSet}>Save Settings</Mybutton>
                        </div>
                        
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default Greeting;

<fieldset>
  <legend><h6>Choose which tasks you want to track: </h6></legend>

  <div>
    <input type="radio" id="huey" name="drone" value="all" checked />
    <label for="huey">All tasks</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="priority-task" value="only-priority" />
    <label for="dewey">Only priority tasks</label>
  </div>

</fieldset>