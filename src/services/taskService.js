import db from "../app/db/firestore"; 
import { getDoc, doc, updateDoc} from 'firebase/firestore';
import { getAuth } from "firebase/auth"; 



export const createTask = async (title, body, valueTime) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        console.error("No user is logged in.");
        return;
    }

    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);
    const existingTasks = userDoc.exists() ? userDoc.data().items || [] : [];

    const newTask = {
        id: new Date().getTime(),
        title,
        body,
        valueTime: new Date(valueTime),
    };
    console.log("Creating task with data:", {
        title: newTask.title,
        body: newTask.body,
        valueTime: newTask.valueTime,
    });
    try {
        await updateDoc(userDocRef, {
            items: [...existingTasks, newTask],
        });
        return newTask;
    } catch (error) {
        console.error("Error adding task: ", error);
    }
    if (!newTask.title || !newTask.body || !newTask.valueTime) {
        console.error("Task fields are missing:", newTask);
        return;
    }
};

export const fetchTasks = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        console.error("No user is logged in.");
        return [];
    }

    const userDocRef = doc(db, "users", user.uid);

    try {
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            return userData.items || [];  
        } else {
            console.error("User document not found!");
            return [];
        }
    } catch (e) {
        console.error("Error fetching tasks: ", e);
        return [];
    }
};

export const removeTask = async (taskId) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        console.error("No user is logged in.");
        return;
    }

    const userDocRef = doc(db, "users", user.uid); 
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
        const currentTasks = userDoc.data().items || [];
        const updatedTasks = currentTasks.filter(task => task.id !== taskId);
        
        try {
            await updateDoc(userDocRef, {
                items: updatedTasks,
            });
            console.log("Task removed successfully");
        } catch (e) {
            console.error("Error removing task: ", e);
        }
    } else {
        console.error("User document not found!");
    }
};

export const completeTask = async (taskId) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        console.error("No user is logged in.");
        return;
    }

    const userDocRef = doc(db, "users", user.uid); 
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
        const currentTasks = userDoc.data().items || [];
        const updatedTasks = currentTasks.map(task => 
            task.id === taskId ? { ...task, completed: true } : task
        );

        try {
            await updateDoc(userDocRef, {
                items: updatedTasks,
            });
            console.log("Task marked as completed");
        } catch (e) {
            console.error("Error marking task as completed: ", e);
        }
    } else {
        console.error("User document not found!");
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
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
        const tasks = userDoc.data().items || [];
        return tasks.filter(task => task.completed); 
    } else {
        console.error("User document not found!");
        return [];
    }
};
