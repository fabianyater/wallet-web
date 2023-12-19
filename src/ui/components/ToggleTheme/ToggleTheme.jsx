import { useContext, useEffect } from "react";
import { ThemeContext } from "../../../context/ThemeProvider";
import Button from "../Button";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Button
      hideText
      onClick={toggleTheme}
      onlyIcon
      title={"Cambiar tema"}
      icon={theme === "dark" ? "lightTheme" : "darkTheme"}
    />
  );
};

export default ToggleTheme;
