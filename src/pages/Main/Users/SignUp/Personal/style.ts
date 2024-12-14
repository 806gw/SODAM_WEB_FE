import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopCont = styled.div`
  width: 100%;
  height: 115vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignUpUserInputCont = styled.div`
  width: 500px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const LinkTagLeft = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: rgb(49, 49, 52);
  font-weight: 700;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

export const LinkTagRight = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: rgb(49, 49, 52);
  font-weight: 700;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

export const LinkBox = styled.div`
  width: 80%;
  height: 50px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const LoginInputWrap = styled.form`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  min-width: 0px;
  padding: 0px;
  border: 0px;
  vertical-align: top;
  margin: 8px 8px 8px 0px;
  width: 80%;
`;

export const LoginBtn = styled.button`
  background-color: #1fad1f;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 100%;
  transition: background-color 0.15s ease-in;

  &:hover {
    background-color: #1ca11c;
  }
`;

export const LoginText = styled.h1`
  text-align: center;
  padding: 20px 0 0 0;
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
