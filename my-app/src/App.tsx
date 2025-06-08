import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState<string>("");
  const [todo, setTodo] = useState<string>("");

  const handelInput = () => {
    const text = state;
    setTodo(text);
    setState("");
  };
  return (
    <>
      <div>
        <h1>TodoList</h1>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button onClick={handelInput}>追加</button>
        <div>Todo：{todo}</div>
      </div>
    </>
  );
}

export default App;
