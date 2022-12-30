import { initializeApp } from "firebase/app";
import { PUBLIC_FIREBASE_CONFIG } from '$env/static/public';
import { getDatabase } from "firebase/database";

const firebaseConfig = JSON.parse(PUBLIC_FIREBASE_CONFIG)

export const app = initializeApp(firebaseConfig);
export const db = getDatabase();