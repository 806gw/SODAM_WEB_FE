import styled from "styled-components";

export const RegistrationContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const TitleRegistration = styled.h1``;

export const MainCont = styled.div`
  margin-top: 40px;
`;

export const InputCont = styled.div`
  display: flex;
`;

export const InputWrap = styled.div`
  width: 50%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
`;

export const AreaCont = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;

  .spanCont {
    width: 32.47%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;

    & > span {
      font-size: 16px;
    }
  }

  .radioCont {
    width: 67.53%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & > div {
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 5px;
    }
  }
`;

export const PurchaseCont = styled.div`
  width: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
`;

export const PurchaseWrap = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  align-items: center;

  .spanCont {
    width: 17.2%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f1f1f1;

    & > span {
      font-size: 16px;
    }
  }

  .countCont {
    width: 82.8%;
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 40px;
    gap: 20px;

    & > div {
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      & > span {
        width: 100px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid #d9d9d9;
        border-bottom: 1px solid #d9d9d9;
      }

      & > button {
        width: 32px;
        height: 32px;
        border: none;
        background-color: #d9d9d9;
      }
    }
  }
`;

export const ImgCont = styled.div`
  margin-top: 20px;
`;

export const UploadWrap = styled.div`
  border: 1px solid #d9d9d9;
  background-color: #f1f1f1;
  border-radius: 4px;
  width: 240px;
  height: 240px;
  font-size: 20px;
`;

export const CustomUploadButton = styled.button`
  border: none;
  width: 240px;
  height: 240px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    background-color: #e3e3e3;
  }
`;

export const StyledFileInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const RegistrationButton = styled.button`
  width: 144px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid #1fad1f;
  background-color: #1fad1f;
  margin-top: 40px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  transition: 0.12s background-color ease-in;

  &:hover {
    background-color: #1b9a1b;
  }
`;
