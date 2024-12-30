import styled from "styled-components";

export const TopCont = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const LeftCont = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;

  & > span {
    font-size: 16px;
    color: #949494;
    margin-top: 15px;
  }

  & > button {
    width: 140px;
    height: 54px;
    border-radius: 4px;
    background-color: #f3fcf3;
    border: 1px solid #1e7b1e;
    color: #1e7b1e;
    font-size: 16px;
    margin-top: 70px;
    cursor: pointer;
    transition: 0.12s background-color ease-in;

    &:hover {
      background-color: #e0e8e0;
    }
  }
`;

export const InputWrap = styled.div`
  display: flex;
  gap: 10px;

  & > label {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 7px;
  }
`;

export const StyledArea = styled.div`
  margin-top: 20px;
`;

export const UploadWrap = styled.div`
  width: 240px;
  height: 240px;
  background-color: #f1f1f1;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UploadBtn = styled.button`
  width: 186px;
  height: 60px;
  font-size: 20px;
  background-color: #1fad1f;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1ca11c;
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const CustomUploadButton = styled.button`
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 4px;
  width: 186px;
  height: 60px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #f7f7f7;
  }
`;

export const StyledFileInput = styled.input`
  display: none;
`;
