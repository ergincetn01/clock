import React, { useState } from "react";
import "./Styles/App.css";
import Stopwatch from "./Components/Stopwatch";
import Countdown from "./Components/Countdown";
import CurrentTime from "./Components/CurrentTime";
import Alarm from "./Components/Alarm";

function App() {
  const [swTime, setSwTime] = useState({ h: 0, m: 0, s: 0, ms: 0 });
  const [cdH, setCdH] = useState(0);
  const [cdM, setCdM] = useState(0);
  const [cdS, setCdS] = useState(0);
  const [cdMs, setCdMs] = useState(0);
  const [swInterv, setSwInterv] = useState();
  const [swStatus, setSwStatus] = useState(0);
  const [cdInterv, setCdInterv] = useState();
  const [cdStatus, setCdStatus] = useState(0);
  /*STATUS
    Not started = 0
    started = 1
    stopped = 2 */
  let swStopVal = "STOP";
  if (swStatus === 1) {
    swStopVal = "STOP";
  } else if (swStatus === 2) {
    swStopVal = "RESUME";
  }

  let cdStopVal = "STOP";
  if (cdStatus === 1) {
    cdStopVal = "STOP";
  } else if (cdStatus === 2) {
    cdStopVal = "RESUME";
  }

  const startSwTime = () => {
    runSWTime();
    setSwStatus(1);
    setSwInterv(setInterval(runSWTime, 10));
  };

  const startCdTime = () => {
    runCdTime();
    setCdStatus(1);
    setCdInterv(setInterval(runCdTime, 10));
  };

  const stopSw = () => {
    if (swStopVal === "STOP") {
      clearInterval(swInterv);
      setSwStatus(2);
    } else if (swStopVal === "RESUME") {
      startSwTime();
    }
  };

  const stopCd = () => {
    if (cdStopVal === "STOP") {
      clearInterval(cdInterv);
      setCdStatus(2);
    } else if (cdStopVal === "RESUME") {
      startCdTime();
    }
  };

  const resetSw = () => {
    clearInterval(swInterv);
    setSwStatus(0);
    setSwTime({ h: 0, m: 0, s: 0, ms: 0 });
  };

  const resetCd = () => {
    clearInterval(cdInterv);
    setCdStatus(0);
    setCdH(0);
    setCdM(0);
    setCdS(0);
    setCdMs(0);
  };
  var updatedSwH = swTime.h,
    updatedSwM = swTime.m,
    updatedSwS = swTime.s,
    updatedSwMs = swTime.ms;

  const runSWTime = () => {
    if (updatedSwM === 60) {
      updatedSwH++;
      updatedSwM = 0;
    }
    if (updatedSwS === 60) {
      updatedSwM++;
      updatedSwS = 0;
    }
    if (updatedSwMs === 100) {
      updatedSwS++;
      updatedSwMs = 0;
    }
    if (updatedSwH === 23 && updatedSwM === 59 && updatedSwS === 59) {
      resetSw();
    }
    updatedSwMs++;

    return setSwTime({
      h: updatedSwH,
      m: updatedSwM,
      s: updatedSwS,
      ms: updatedSwMs,
    });
  };

  var updatedCdH = cdH,
    updatedCdM = cdM,
    updatedCdS = cdS,
    updatedCdMs = cdMs;

  const runCdTime = () => {
    if (updatedCdM === 0) {
      updatedCdH--;
      updatedCdM = 59;
    }
    if (updatedCdS === 0) {
      updatedCdM--;
      updatedCdS = 59;
    }
    if (updatedCdMs === 0) {
      updatedCdS--;
      updatedCdMs = 100;
    }
    if (
      updatedCdH === 0 &&
      updatedCdM === 0 &&
      updatedCdS === 0 &&
      updatedCdMs === 0
    ) {
      stopCd();
    }
    updatedCdMs--;
    return (
      setCdH(updatedCdH),
      setCdM(updatedCdM),
      setCdS(updatedCdS),
      setCdMs(updatedCdMs)
    );
  };

  const handleHour = (e) => {
    setCdH(e.target.value);
  };

  const handleMin = (e) => {
    setCdM(e.target.value);
  };

  const handleSec = (e) => {
    setCdS(e.target.value);
  };

  return (
    <div>
      <h1>DIGITAL CLOCK</h1>
      <div className="row1">
        <div className="ct">
          <CurrentTime />
        </div>
        <div className="alarm">
          <Alarm />
        </div>
      </div>

      <div className="row2">
        <div className="sw">
          <Stopwatch
            reset={resetSw}
            stopVal={swStopVal}
            stop={stopSw}
            start={startSwTime}
            time={swTime}
            status={swStatus}
          />
        </div>
        <div className="cd">
          <Countdown
            h={cdH}
            m={cdM}
            s={cdS}
            setH={handleHour}
            setM={handleMin}
            setS={handleSec}
            status={cdStatus}
            key={1}
            reset={resetCd}
            start={startCdTime}
            stop={stopCd}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
