import "../Styles/ButtonCDTimer.css";
function ButtonCDTimer({ reset, stop, status, start, stopVal }) {
  const conditionalButtons = () => {
    if (status === 0) {
      //not started
      return (
        <div className="buttons">
          <button className="btn-start" disabled={status !== 0} onClick={start}>
            Start Timer
          </button>
        </div>
      );
    } else if (status === 1) {
      //started
      return (
        <div className="buttons">
          <button className="btn-stop" onClick={stop}>
            STOP
          </button>
          <button className="btn-reset" onClick={reset}>
            RESET
          </button>
        </div>
      );
    } else if (status === 2) {
      //stopped
      return (
        <div className="buttons">
          <button className="btn-stop" onClick={stop}>
            RESUME
          </button>
          <button className="btn-reset" onClick={reset}>
            RESET
          </button>
        </div>
      );
    }
  };

  return <div className="buttons">{conditionalButtons()}</div>;
}

export default ButtonCDTimer;
