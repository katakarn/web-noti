import React from 'react';

const App: React.FC = () => {
  const handleNotificationClick = () => {
    if (Notification.permission === 'granted') {
      console.log("Push Notify!!");
      new Notification("ลงทะเบียนสำเร็จ", {
        body: "SU SmartPlus",
        icon: "https://play-lh.googleusercontent.com/2uTuCYDbOjJbT_Oicgovv2XvyTw_zPgEDrKDQMUhbzED9rXvRanyml2MYhjdi9LgcQ",
      }).onclick = function (event) {
        event.preventDefault(); // prevent the browser from focusing the Notification's tab
        window.open('https://web.facebook.com/roofimon.class?locale=th_TH', '_blank');
      }
    }
  };

  const requestNotificationPermission = () => {
    console.log("clicked request");
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        console.log("Notification permission granted!");
      }
    });
  }

  const checkNotification = () => {
    console.log(Notification.permission);
  };

  const notiWindow = () => {
    console.log('Notification' in window);
  }

  const notifyMe = () => {
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      console.log("Push Notify!!");
      const notification = new Notification("Hi there!");
      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          const notification = new Notification("Hi there!");
          // …
        }
      });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }
  return (
    <div>
      <h1>React Web Notifications</h1>
      <button onClick={checkNotification}>Check Notification</button><br />
      <button onClick={requestNotificationPermission}>Request Permission</button><br />
      <button onClick={handleNotificationClick}>Show Notification</button><br />
      <button onClick={notiWindow}>Check Notification in Window</button><br />
      <button onClick={notifyMe}>Notify Me</button>
    </div>
  );
};

export default App;
