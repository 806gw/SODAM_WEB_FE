import styled from "styled-components";

export const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;

  & > span {
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0 0 5px 2px;
  }

  & > input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    background-color: #dedede;
    border: none;
    outline: none;
    font-size: 14px;
    margin-bottom: 10px;
    padding-left: 10px;
    box-sizing: border-box;
    margin: 0 auto;
  }
`;
