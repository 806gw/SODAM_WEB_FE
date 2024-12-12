import styled from "styled-components";

export const HeaderCont = styled.header`
  width: 100%;
  height: 64px;
  border-bottom: solid 1px #d9d9d9;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerCont = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
`;

export const HeaderLeft = styled.div`
  img {
    height: 32px;
    width: auto;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  *:not(p) {
    display: flex;
    align-items: center;
    font-size: 28px;
  }
`;

export const SearchBar = styled.div`
  width: 360px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e5e5e5;
  border-radius: 30px;
  padding: 5px 15px;
  input {
    border: none;
    background: transparent;
    outline: none;
    margin-right: 10px;
    font-size: 16px;
  }
  svg {
    font-size: 24px;
    cursor: pointer;
  }
`;
