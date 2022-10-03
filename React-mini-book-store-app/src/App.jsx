import { useState } from "react";
import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";

function App() {
  const [funct,setFunct] = useState(true)
  return (
    <div 
    style={{
      margin:"auto",
      backgroundColor: "teal",
      textAlign:"center",
    }}>

      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn"
      style={{height:"50px", width:"300px", borderRadius:"20px", backgroundColor:"pink",fontSize:"20px"}}
       onClick={()=> setFunct(!funct)}>{funct ? "Show Non-Fiction Books" : "Show Fictional Books"}</button>

      <div data-testid="conditional-container">

        {/* Render either Fiction or NonFiction Based on the Condition */}
        {funct ? <Fiction /> : <NonFiction />}
        
      </div>
    </div>
  );
}

export default App;
