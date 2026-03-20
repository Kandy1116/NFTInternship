import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calcTime = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft(null);
        return;
      }

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ h: hours, m: minutes, s: seconds });
    };

    const interval = setInterval(calcTime, 1000);
    calcTime();

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="de_countdown">
      {timeLeft ? (
        <>
          <span className="countdown-section">{timeLeft.h}h</span>
          <span className="countdown-section">{timeLeft.m}m</span>
          <span className="countdown-section">{timeLeft.s}s</span>
        </>
      ) : (
        "EXPIRED"
      )}
    </div>
  );
};

export default Countdown;
