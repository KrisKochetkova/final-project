import { getDocs, collection, updateDoc } from 'firebase/firestore';
import db from '../app/db/firestore'; // Убедитесь, что путь к вашему db корректен

const initializeUserItems = async () => {
    const userCollectionRef = collection(db, 'users');
    const querySnapshot = await getDocs(userCollectionRef);

    querySnapshot.forEach(async (doc) => {
        const userData = doc.data();
        if (!userData.items) {
            await updateDoc(doc.ref, { items: [] });
            console.log(`Initialized items for user: ${doc.id}`);
        }
    });
};

initializeUserItems();
