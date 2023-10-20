import React, { useState } from "react";

const Typebox = () => {
    const [time, setTime] = useState(15);
    let displayText =
      "Under the golden sun, the tranquil waves kissed the sandy shore. Seagulls danced in the azure sky, and a gentle breeze carried the scent of salt and freedom. This idyllic beach offered solace, a place where worries faded, and the world felt as boundless as the ocean.";
    let keychar=0;
    return (
    <div>
      <div className="time-div">
        <div>{time}</div>
        <div className="time-btn">
          <button onClick={() => setTime(15)}>15s</button>
          <button onClick={() => setTime(30)}>30s</button>
          <button onClick={() => setTime(60)}>60s</button>
        </div>
      </div>
      <div className="typeBox">
        {displayText.split("").map((char)=>(<span key={'char'+(keychar++)}>{char}</span>))}
      </div>
    </div>
  );
};

export default Typebox;
