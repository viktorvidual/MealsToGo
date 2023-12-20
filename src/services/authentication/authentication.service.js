import { auth } from "../../../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const loginRequest = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUpRequest = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChange = (callback) => {
  auth.onAuthStateChanged(callback);
};

export const logOut = () => {
  return signOut(auth);
};
