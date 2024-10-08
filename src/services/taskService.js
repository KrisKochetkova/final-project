import db from "../app/db/firestore"; 
import { collection, addDoc, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';
import { getAuth } from "firebase/auth"; 

export const createTask = async (title, body, valueTime) => {
    try {
        const docRef = await addDoc(collection(db, "to-do-items"), {
            title,
            body,
            valueTime: new Date(valueTime),
            removed: false,
        });
        return { id: docRef.id, title, body, valueTime };
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export const fetchTasks = async () => {
    const auth = getAuth();
    const userId = auth.currentUser.uid; 
    const q = query(collection(db, 'to-do-items'), where("userId", "==", userId), where("removed", "==", false)); 

    const querySnapshot = await getDocs(q);
    const tasks = [];
    querySnapshot.forEach((doc) => {
        tasks.push({ id: doc.id, ...doc.data() });
    });
    return tasks;
};

export const removeTask = async (taskId) => {
    try {
        const taskRef = doc(db, 'to-do-items', taskId); 
        await updateDoc(taskRef, { removed: true });
        console.log("Task marked as removed");
    } catch (e) {
        console.error("Error removing task: ", e);
    }
};

export const completeTask = async (taskId) => {
    try {
        const taskRef = doc(db, 'to-do-items', taskId); 
        await updateDoc(taskRef, { completed: true });
        console.log("Task marked as completed");
    } catch (e) {
        console.error("Error marking task as completed: ", e);
    }
};

export const fetchCompletedTasks = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        console.error("No user is logged in.");
        return [];
    }

    const userId = user.uid; 
    const q = query(collection(db, 'to-do-items'), where("userId", "==", userId), where("completed", "==", true)); 

    const querySnapshot = await getDocs(q);
    const completedTasks = [];
    querySnapshot.forEach((doc) => {
        completedTasks.push({ id: doc.id, ...doc.data() });
    });
    
    return completedTasks;
};