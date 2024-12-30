import styled from "styled-components";

export const TopCont = styled.div`
  background-color: #fff;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 100px;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1320px;
  height: 100vh;
`;

export const InputWrap = styled.div`
  width: 26%;
  margin-top: 30px;
  border: 1px solid #ccc;
`;

export const DiaryWrap = styled.div`
  width: 100%;
  height: 280px;
  margin-top: 20px;

  & > textarea {
    width: 100%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 4px;
    resize: none;
    padding: 10px 15px;
    font-size: 16px;
    line-height: 2.5;
    background-image: linear-gradient(
      transparent,
      transparent calc(2.5em - 1px),
      #e5e5e5 0
    );
    background-size: 100% 2.5em;
    background-origin: content-box;
    background-attachment: local;
    font-family: sans-serif;

    &::placeholder {
      color: #999;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const ImgCont = styled.div``;
