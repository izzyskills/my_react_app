import React from "react";

function Digital_Clock() {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    const interValid = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interValid);
    };
  }, []);
  function padZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }
  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }
  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default Digital_Clock;
