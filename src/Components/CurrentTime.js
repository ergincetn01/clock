import { useState } from "react";
import "../Styles/Current.css";

function CurrentTime() {
  const now = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const hour = new Date().getHours();
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();
  const year = new Date().getFullYear();

  var time = new Date().toLocaleString();
  const [cTime, setCTime] = useState({ h: hour, m: min, s: sec });
  const updateTime = () => {
    setCTime({ h: hour, m: min, s: sec });
  };
  const setInterv = () => {
    setInterval(updateTime, 1000);
  };

  var hours;
  if (cTime.h < 10) {
    hours = "0" + hour;
  } else {
    hours = hour;
  }
  var mins;
  if (mins < 10) {
    mins = "0" + min;
  } else {
    mins = min;
  }

  var secs;
  if (sec < 10) {
    secs = "0" + sec;
  } else {
    secs = sec;
  }

  setInterv();

  return (
    <div className="main">
      <h2>Current Date</h2>
      <div className="date">
        {now}/{month}/{year}
      </div>
      <h2>Current Time</h2>
      <div className="container">
        <div className="clock-item">{hours}</div>
        <div className="clock-item">{mins}</div>
        <div className="clock-item">{secs}</div>
      </div>
    </div>
  );
}

export default CurrentTime;
