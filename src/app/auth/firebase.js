import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "../db/firestore";

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();