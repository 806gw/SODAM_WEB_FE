import styled from "styled-components";

interface InputType {
  inputType?: string;
}

export const TopCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainCont = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;
`;

export const SpanCont = styled.div`
  width: 32.47%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;

  & > span {
    font-size: 16px;
  }
`;

export const InputCont = styled.div<InputType>`
  width: 67.53%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > input {
    width: 80%;
    height: 36px;
    padding: 10px;
    border: 1px solid #d9d9d9;
    color: ${({ inputType }) => (inputType === "date" ? "#949494" : "#000")};
    border-radius: 3px;
    font-size: 16px;
  }
`;
