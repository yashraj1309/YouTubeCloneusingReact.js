import "./styles.css";
import { useState } from "react";
import Youtube from "./Youtube";
export default function App() {
  const [text, setText] = useState();
  return (
    <div className="App">
      <h1>Youtube</h1>
      <h3>Search Below</h3>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Search Here"
      />
      <Youtube q={text} />
    </div>
  );
}
