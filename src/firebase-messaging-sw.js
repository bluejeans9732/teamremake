import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAjq0DQdr1tTLWhE61NFXyk3Sbv7at_G-0",
  authDomain: "alert-511ec.firebaseapp.com",
  projectId: "alert-511ec",
  storageBucket: "alert-511ec.appspot.com",
  messagingSenderId: "932089326067",
  appId: "1:932089326067:web:41b66ee8c94980d59e0a86",
  measurementId: "G-46XKSXKNBZ"
};



function requestPermission() {
    console.log("Requesting permission...");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted.");
        const app = initializeApp(firebaseConfig);
  
        const messaging = getMessaging(app);
        getToken(messaging, {
          vapidKey:
            "BFbP_SRT4wUriX63f-541vP1r_fJgmw35J8VQiKG_M1Q36vDaijxtbQbFQ51yL46UIxxoPnNQoYE6JRNX2dULFA",
        }).then((currentToken) => {
          if (currentToken) {
            console.log("currentToken: ", currentToken);
          } else {
            console.log("Can not get token");
          }
        });
      } else {
        console.log("Do not have permission!");
      }
    });

  }
  
  requestPermission();
