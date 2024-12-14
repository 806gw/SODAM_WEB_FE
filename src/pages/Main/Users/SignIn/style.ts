import { Link } from "react-router-dom";
import styled from "styled-components";

export const TopCont = styled.div`
  width: 100%;
  height: 91vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginInputCont = styled.div`
  width: 500px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginInputWrap = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 8px 0;
`;

export const LoginBtn = styled.button`
  background-color: #1fad1f;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  margin-top: 40px;
  transition: background-color 0.15s ease-in;

  &:hover {
    background-color: #1ca11c;
  }
`;

export const InputCont = styled.div`
  position: relative;
`;

export const PasswordToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 78%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;

  .show_logo {
    font-size: 20px;
    color: #707070;
  }
`;

export const LinkBox = styled.div`
  width: 80%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkTag = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: rgb(49, 49, 52);
  font-weight: 700;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

export const LoginText = styled.h1`
  text-align: center;
  padding: 20px 0 0;
`;

export const LoginFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  p {
    font-size: 14px;
    padding: 10px;
  }

  .logo {
    width: 60px;
  }
`;
