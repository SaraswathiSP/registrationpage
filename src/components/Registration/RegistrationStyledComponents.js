import styled from "styled-components";

export const LoginContainer = styled.div`
  background-image: url("https://res.cloudinary.com/dg0telgxq/image/upload/v1680081328/blurry-gradient-haikei_1_xukx0u.svg");
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 675px) {
    padding: 20px;
    min-height: 130vh;
  }
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #07182e;
  width: 95%;
  min-height: 100vh;
  border-radius: 10px;
  @media screen and (max-width: 675px) {
    padding: 10px;
    margin-top: 50px;
  }
`;
export const Heading = styled.h2`
  color: #fff;
  font-size: 25px;
  text-align: center;
  text-decoration: underline;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px;
`;

export const Cont1 = styled.div`
  display: flex;
  @media screen and (max-width: 675px) {
    display: flex;
    flex-direction: column;
  }
`;
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  margin-right: 40px;
  @media screen and (max-width: 675px) {
    width: 90%;
  }
`;

export const Label = styled.label`
  color: #fff;
  font-size: 25px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 15px;
  height: 30px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  @media screen and (max-width: 675px) {
    width: 90%;
  }
  &:hover {
    border: 4px solid #c99b3b;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 90%;
  height: 45px;
  font-weight: bold;
  border: none;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  cursor: pointer;
  margin-top: 15px;

  border-radius: 15px;
  background: #ffffff;
  @media screen and (max-width: 767px) {
    width: 95%;
  }
`;
