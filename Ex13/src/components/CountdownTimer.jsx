import { useEffect, useState } from 'react'

export default function CountdownTimer({ initialValue = 10 }) {
  const [timeRemaining, setTimeRemaining] = useState(initialValue);

  useEffect(() => {
    if (timeRemaining <= 0) {
      return;
    }

    const timerId = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeRemaining]) ;

  return (
    <div className="demo-box">
      <p className="label">Time Remaining: {timeRemaining}</p>
    </div>
  )
}
