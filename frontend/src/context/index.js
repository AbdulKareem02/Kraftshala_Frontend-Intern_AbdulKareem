import React from "react";

const ThemeContext = React.createContext({
  theme: false,
  changeTheme: () => {},
});
export default ThemeContext;
