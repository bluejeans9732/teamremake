importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyAjq0DQdr1tTLWhE61NFXyk3Sbv7at_G-0",
  authDomain: "alert-511ec.firebaseapp.com",
  projectId: "alert-511ec",
  storageBucket: "alert-511ec.appspot.com",
  messagingSenderId: "932089326067",
  appId: "1:932089326067:web:41b66ee8c94980d59e0a86",
  measurementId: "G-46XKSXKNBZ"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
