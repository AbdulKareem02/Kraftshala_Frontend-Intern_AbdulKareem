import styled from "styled-components";

export const WeatherReportBgContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WeatherReportContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const TepmeratureCard = styled.div`
  background-color: ${(props) =>
    props.cardTheme ? "#fff" : "rgb(46, 50, 53)"};
  color: ${(props) => (props.cardTheme ? "#000" : "#fff")};
  padding: 18px;
  text-align: center;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  width: 70%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
