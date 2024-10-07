import db from './firestore'; 
import { collection, addDoc, getDocs, query, where, doc, setDoc } from 'firebase/firestore';


export const addUser = async (userId, userData) => {
    try {
        const userRef = doc(db, "users", userId);
        await setDoc(userRef, userData);
        console.log("User add");
    } catch (error) {
        console.error(" Error in adding", error);
    }
};

export const getUsers = async () => {
    const usersCollection = collection(db, "users");
    const userSnapshot = await getDocs(usersCollection);
    const userList = userSnapshot.docs.map(doc => doc.data());
    return userList;
};


export const getUserByUsername = async (username) => {
    const q = query(collection(db, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
    } else {
        throw new Error('Пользователь не найден');
    }
};
