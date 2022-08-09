import "./styles.css";
import React, { useState } from "react";
import HomePage from "./HomePage";
import { AppContext } from "./context";
import { UseTheme } from "./hookForToogleTheme/use-theme";

export default function App() {
  const { theme, setTheme } = UseTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={`App ${theme}`}>
      <h1 className="title">REACT CONTEXT</h1>
      <AppContext.Provider value={{ toggleTheme, theme }}>
        <HomePage toggleTheme={toggleTheme} />
      </AppContext.Provider>
    </div>
  );
}
