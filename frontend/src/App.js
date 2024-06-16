import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ThemeContext from "./context";

import { Component } from "react";

//url = "https://api.openweathermap.org/data/2.5/weather?zip=500018,in&appid=544b148e36c58fb2eb65f673fb4381e1&q=hyderabad"

class App extends Component {
  state = { theme: true };

  changeTheme = () => {
    this.setState((preSts) => ({ theme: !preSts.theme }));
    console.log("button clicked");
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider
        value={{ theme: theme, changeTheme: this.changeTheme }}
      >
        <Navbar />
        <Home />
      </ThemeContext.Provider>
    );
  }
}

export default App;
