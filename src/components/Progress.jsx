import React, { useEffect, useState } from "react";

// reusable progress bar component
function Progress({ timeout = 10000, onTimeout = null }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // this side effect for setting the timeout
  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  // this side effect for decreasing the remaining time by 100ms every 100ms
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 50);
    }, 50);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" value={remainingTime} max={timeout} />;
}

export default Progress;
