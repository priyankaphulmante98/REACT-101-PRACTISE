import { useState } from "react";

export default function PlayPause() {
  const [cut, setCut] = useState(false);
  let hell = () => {
    setCut(!cut);
  };
  return (
    <div>
      <h1>{cut ? "The state is playing" : "The state is paused"}</h1>
      <button
        style={{
          height: "40px",
          width: "100px",
          borderRadius: "10px",
          backgroundColor: "green",
          color: "white"
        }}
        onClick={hell}
      >
        {cut ? "Playing" : "Paused"}
      </button>
    </div>
  );
}
