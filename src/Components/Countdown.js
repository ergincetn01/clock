import ButtonCDTimer from "./ButtonCDTimer";
import "../Styles/Countdown.css"

function Countdown({
  h,
  m,
  s,
  setH,
  setM,
  setS,
  reset,
  stop,
  status,
  start,
  stopVal,
}) {
  const hourList = [];
  const minList = [];
  const secList = [];

  for (let i = 0; i < 60; i++) {
    minList.push(i);
    secList.push(i);
  }

  for (let j = 0; j < 24; j++) {
    hourList.push(j);
  }

  const conditionalRender=()=> {
    if(status===0){
      return(
        <div>
        <div className="lbl">
          <div className="item">HOUR</div>
          <div className="item">MIN</div>
          <div className="item">SECONDS</div>
        </div>
        <div className="clock-setter">
          <div className="hourSetter">
            <select value={h} onChange={setH}>
              {hourList.map((hr) => (
                <option key={hr}>{hr}</option>
              ))}
            </select>
          </div>
          <div className="minSetter">
            <select value={m} onChange={setM}>
              {minList.map((min) => (
                <option key={min}>{min}</option>
              ))}
            </select>
          </div>
          <div className="secSetter">
            <select value={s} onChange={setS}>
              {secList.map((sec) => (
                <option key={sec}>{sec}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      )
    }

    else if (status===1 ){
      return(
        <div></div>
      )
    }
  }

  return (
      <div className="main">
        <h1>Countdown Timer</h1>
        <div className="clock-container">
          <div className="sq">{h}</div>
          <div className="sq">{m}</div>
          <div className="sq">{s}</div>
        </div>
        {conditionalRender()}
          
        
        <ButtonCDTimer
        reset={reset}
        start={start}
        status={status}
        stopVal={stopVal}
        stop={stop}
        key={2}
      />
    
      
    </div>
  );
}

export default Countdown;
