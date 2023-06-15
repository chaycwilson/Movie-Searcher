import "./App.css";
import Header from "./Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`app ${theme}`}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <SearchBar theme={theme}/>
      {/* <SearchOutput /> */}
    </div>
  );
}
export default App;
