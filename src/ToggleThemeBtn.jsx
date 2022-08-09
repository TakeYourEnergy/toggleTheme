import { useContext } from "react";
import { AppContext } from "./context";

const ToggleThemeBtn = () => {
  const { toggleTheme } = useContext(AppContext);

  return (
    <button onClick={toggleTheme} className="btn">
      <p className="text">Переключить тему</p>
    </button>
  );
};

export default ToggleThemeBtn;
