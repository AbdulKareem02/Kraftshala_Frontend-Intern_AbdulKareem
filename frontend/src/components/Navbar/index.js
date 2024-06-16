import ThemeContext from "../../context";
import "./index.css";
import { MdSunny } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";
import { FaCloudSun } from "react-icons/fa";
import { NavbarContainer, NavbarHeading, ThemeButton } from "./style";
const Navbar = () => (
  <ThemeContext.Consumer>
    {(value) => {
      const { theme, changeTheme } = value;
      const onChangeClick = () => changeTheme;
      return (
        <NavbarContainer navTheme={theme}>
          <NavbarHeading navTheme={theme}>
            <FaCloudSun className="nav-logo" />
            Weather Reporter
          </NavbarHeading>
          <ThemeButton type="button" onClick={onChangeClick()}>
            {theme ? <MdNightlightRound /> : <MdSunny />}
          </ThemeButton>
        </NavbarContainer>
      );
    }}
  </ThemeContext.Consumer>
);

export default Navbar;
