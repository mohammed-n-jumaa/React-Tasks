import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    return () => clearInterval(interval); // تنظيف الـ interval عند الإلغاء
  }, []);

  return (
    <div className="container">
      <h3>Timer</h3>
      <p>Time Elapsed: {seconds}s</p>
    </div>
  );
};

export default Timer;
