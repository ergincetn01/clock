import "../Styles/Stopwatch.css";

function Stopwatch({ time, start, stop, stopVal, status, reset }) {

  const conditionalRender = () => {
    if (status === 0) {
      return (
        <div className="buttons">
          <button className="btn-start" onClick={start}>
            START
          </button>
        </div>
      );
    } else if (status === 1) {
      return (
        <div className="buttons">
          <button className="btn-reset" onClick={reset}>
            RESET
          </button>
          <button className="btn-stop" disabled={status === 0} onClick={stop}>
            STOP
          </button>
        </div>
      );
    } else if (status === 2) {
      return <div className="buttons">
        <button className="btn-reset" onClick={reset}>
            RESET
          </button>
          <button className="btn-stop" onClick={stop}>
            RESUME
          </button></div>;
    }
  };

  return (
    <div className="main">
      <h1>Stopwatch</h1>
      <div className="clock-container">
        <div className="sq">{time.h}</div>
        <div className="sq">{time.m}</div>
        <div className="sq">{time.s}</div>
      </div>

      {conditionalRender()}
    </div>
  );
 
}

export default Stopwatch;
