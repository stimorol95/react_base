// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNvGocWJWoDTmv_WzbNyGjzCrdbgH2GFw",
  authDomain: "react-base-5ca5f.firebaseapp.com",
  projectId: "react-base-5ca5f",
  storageBucket: "react-base-5ca5f.appspot.com",
  messagingSenderId: "1035069899573",
  appId: "1:1035069899573:web:6c4115ef2d0f911951027c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email, pass) =>
  createUserWithEmailAndPassword(auth, email, pass);
export const login = (email, pass) =>
  signInWithEmailAndPassword(auth, email, pass);
export const logout = () => signOut(auth);

export const db = getDatabase(app);
export const profileRef = ref(db, "profile");
export const getProfileNameRef = (userId) => ref(db, `profile/${userId}/name`);
export const profileShowNameRef = ref(db, "profile/showName");
export const chatsRef = ref(db, "chats");
export const getChatsRefById = (chatId) => ref(db, `chats/${chatId}`);

export const messagesRef = ref(db, "messages");
export const getMessageListRefByChatId = (chatId) =>
  ref(db, `messages/${chatId}/messageList`);
export const getMessagesRefByChatId = (chatId) => ref(db, `messages/${chatId}`);
export const getMessageRefById = (chatId, msgId) =>
  ref(db, `messages/${chatId}/messageList/${msgId}`);
