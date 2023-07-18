import "../Styles/Alarm.css";
function Alarm({h, m, s, reset, start}) {
  return (
    <div className="main">
        <h2>Alarm</h2>
      <div className="display-alarm">
        <div className="alarm-item">selected hour </div>
        <div className="alarm-item">min </div>
        <div className="alarm-item">sec</div>

      </div>
      <div className="set-alarm">
        <div className="set-h">Hour</div>
        <div className="set-m">Min</div>
        <div className="set-s">Sec</div>
      </div>
    </div>
  );
}

export default Alarm;
