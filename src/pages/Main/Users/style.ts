import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignUpUserInputCont = styled.div`
  width: 500px;
  height: 700px;
  background-color: #f7f7f7;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LinkTagLeft = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: rgb(49, 49, 52);
  font-weight: 700;
  transition: all 0.3s;
  &:hover {
    text-decoration: underline;
    color: rgb(105, 105, 113);
  }
`;

export const LinkTagRight = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: rgb(49, 49, 52);
  font-weight: 700;
  transition: all 0.3s;
  &:hover {
    text-decoration: underline;
    color: rgb(105, 105, 113);
  }
`;

export const LinkBox = styled.div`
  width: 90%;
  height: 50px;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const SignUpBusinessInputCont = styled.div`
  width: 500px;
  height: 950px;
  background-color: #f7f7f7;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoginInputCont = styled.div`
  width: 500px;
  height: 400px;
  background-color: #f7f7f7;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  width: 100%;
`;

export const InputCont = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 15px 25px;
  font-size: 13px;
  color: #000;
  border: 1px #c4c4c4 solid;
  border-radius: 5px;
  outline: transparent 1px solid;
  box-sizing: border-box;
`;

export const LoginIssueText = styled.div`
  font-size: 12px;
  height: 18px;
  margin-left: 4px;
  min-width: 400px;
  width: 95%;
  margin-top: 10px;

  .issue_logo {
    color: rgb(255, 0, 0);
    margin-bottom: -2.5px;
    font-size: 14px;
  }

  span {
    color: #333;
    margin-left: 3px;
  }
`;

export const LoginBtn = styled.button`
  background-color: #1fad1f;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: block;
  font-family: Noto Sans KR, sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  width: 90%;
  transition: background-color 0.12s ease-in;

  &:hover {
    background-color: #1e7b1e;
  }
`;

export const LoginText = styled.h1`
  text-align: center;
  padding: 20px 0 0 0;
`;

export const ErrorText = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  color: red;
  font-size: 12px;
  margin: 10px 10px;
`;

export const LoadingText = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  color: #3669dd;
  font-size: 12px;
  margin: 10px 20px;
`;
