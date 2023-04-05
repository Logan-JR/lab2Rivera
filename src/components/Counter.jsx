import { useEffect, useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCount(count => count + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
  return (
    <div>
      <h1>Counter</h1>
      <div> {count} </div>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <button onClick={() => setCount(count - 1)}>Reducir</button>
    </div>
  );
}
export default Counter;