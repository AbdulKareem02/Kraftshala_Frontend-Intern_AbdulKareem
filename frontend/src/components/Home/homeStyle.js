import styled from "styled-components";

export const HomeMainContainer = styled.div`
  background-color: ${(props) =>
    props.homecard ? "rgb(225, 235, 241);" : "#000"};
  color: ${(props) => (props.homecard ? "#000" : "#fff")};
  height: 95vh;
  margin-top: 0;
  padding: 5px;
`;
export const FormContainer = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0px;
  background-color: ${(props) =>
    props.cardTheme ? "#fff" : "rgb(46, 50, 53)"};
  padding: 15px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const FormHeading = styled.h4`
  text-align: center;
  background-color: ${(props) =>
    props.formHead ? "rgb(225, 235, 241);" : "#000"};
  color: ${(props) => (props.formHead ? "#000" : "#fff")};
`;
export const SubmitButton = styled.button`
  background-color: rgb(39, 103, 213);
  color: #fff;
  height: 37px;
  border: 0;
  width: 180px;
  margin-top: 15px;
  padding: 8px;
  border-radius: 10px;
`;
export const WeatherDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
`;

export const FailureContainer = styled.div`
  color: ${(props) => (props.failure ? "#000" : "#fff")};
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;
