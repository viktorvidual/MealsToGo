import { auth } from "../../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
