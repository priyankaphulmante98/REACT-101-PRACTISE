// Write Code here
// do a default export
import {useState} from 'react'

export default function PlayPause() {
    const [data, setData] = useState(false);
    let boss = () => {
        setData(!data);
      };

  return (
    <div>
      <h1>{data ? "The state is playing" : "The state is paused"}</h1>
      <button style={{height: "40px",
          width: "100px",
          borderRadius: "10px",
          backgroundColor: "green",
          color: "white"}}
      onClick={boss}>{data ? "Playing" : "Paused"}</button>
    </div>
  );
}
