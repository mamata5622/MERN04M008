import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countref = useRef(0);

  const handleClick=(e)=>{
    countref.current += 1;
    console.log('counter : ',countref.current)
    console.log(e.target)
  }
  return (
    <>
      <div>
        {/* <button
          onClick={(e) => setCount((count) => count + 1, console.log(e.target))}
        >
          Click : {count}
        </button> */}
        <br />
        <button onClick={handleClick}>Click</button>
        <br />

        <button onClick={(e)=>{countref.current++;
          console.log('count : ',countref.current)
          console.log(e.target)
        }}> btn</button>
      </div>
    </>
  );
}

export default App;
