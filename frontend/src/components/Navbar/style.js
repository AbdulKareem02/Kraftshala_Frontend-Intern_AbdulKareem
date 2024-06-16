import style from "styled-components";

export const NavbarContainer = style.div`
    display:flex;
    justify-content:space-around;
    height:70px;
    background-color: ${(props) =>
      props.navTheme ? "#fff" : "rgb(46, 50, 53)"};
`;
export const NavbarHeading = style.h1`
    color:#000;
    display:flex;
    justify-content-center;
    align-items:center;
    color: ${(props) => (props.navTheme ? "#000" : "#fff")};
    @media(max-width : 768px){
        font-size:20px;
    }
`;

export const ThemeButton = style.button`
    font-size:22px;
    background:white;
    border-radius:32px;
    display:flex;
    align-items:center;
    justify-content:center;
    padding:8px;
    border:0;
`;
