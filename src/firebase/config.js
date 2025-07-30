import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDaVDkCUpke868OiqBIZxHfKYoQN-vmMnw",
  authDomain: "tienda-coder-34df0.firebaseapp.com",
  projectId: "tienda-coder-34df0",
  storageBucket: "tienda-coder-34df0.firebasestorage.app",
  messagingSenderId: "928382267202",
  appId: "1:928382267202:web:c039089af3c5f71bdb62db",
  measurementId: "G-CV760WKCS5"
};
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
