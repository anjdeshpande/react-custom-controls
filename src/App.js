import "./styles.css";
import { SearchableDropdown } from "./SearchableDropdown";
import { SearchTextbox } from "./SearchTextbox";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");

  const colors = ["red", "green", "blue"];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="mx-auto w-75 mt-4">
        <SearchTextbox
          autoFocus
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </div>
      <div className="mt-4">{text}</div>

      <div className="mx-auto w-75 mt-4">
        <SearchableDropdown
          menuContent={colors}
          menuItemTemplate={(i) => <div style={{ color: i }}>{i}</div>}
          onMenuItemClicked={(i) => console.log(i)}
        />
      </div>
    </div>
  );
}
