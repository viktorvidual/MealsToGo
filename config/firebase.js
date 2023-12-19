import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDN36IQRvUU65cR8mf7v0_DVND0VrtyIKU",
  authDomain: "mealstogo-964a5.firebaseapp.com",
  projectId: "mealstogo-964a5",
  storageBucket: "mealstogo-964a5.appspot.com",
  messagingSenderId: "364142064086",
  appId: "1:364142064086:web:2728f4f565b9dd4de17477",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth };
