import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const Ref = useRef(null);

  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
      total,
      hours,
      minutes,
      seconds
    };
  };

  const startTimer = (e) => {
    let { total, minutes, hours, seconds } = getTimeRemaining(e);

    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:00:10");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTimer = () => {
    let deadLine = new Date();

    deadLine.setSeconds(deadLine.getSeconds() + 10);
    return deadLine;
  };

  useEffect(() => {
    clearTimer(getDeadTimer());
  }, []);

  const onReset = () => {
    clearTimer(getDeadTimer());
  };

  return (
    <>
      <h1>{timer}</h1>
      <button onClick={onReset}>Reset</button>
    </>
  );
};

export default Timer;
