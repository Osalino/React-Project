import { useState } from "react";
import './index.css';

const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }
    
    setInterval(updateTime, 1000);
  return (
    <div className="clock">
      <h1>{currentTime}</h1>
      <h2>{digital}</h2>
    </div>
  )
}

export default Clock;
