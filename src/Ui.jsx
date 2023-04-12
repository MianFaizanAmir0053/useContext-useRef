import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { TextInput } from "./TextInput";

function Ui() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Toggle Mode</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
      </button>
      <TextInput />
      <p>Some text</p>
    </div>
  );
}

export default Ui;
