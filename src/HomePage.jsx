import { useContext } from "react";
import ToggleThemeBtn from "./ToggleThemeBtn";
import { AppContext } from "./context";

const HomePage = () => {
  const { theme } = useContext(AppContext);

  return (
    <>
      <h2>выбрана тема: {theme}</h2>
      <ToggleThemeBtn />
    </>
  );
};

export default HomePage;
