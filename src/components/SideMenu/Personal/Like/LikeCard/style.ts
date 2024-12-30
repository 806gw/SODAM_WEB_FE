import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`;

export const Details = styled.div`
  flex: 1;
  margin-left: 16px;
  .status {
    font-size: 20px;
    color: #555;
  }
  .title {
    font-size: 16px;
    font-weight: bold;
    margin: 4px 0;
  }
  .price {
    font-size: 14px;
    span {
      margin-left: 8px;
      font-size: 14px;
      color: #888;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  button {
    margin: 4px 0;
    padding: 8px 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: #d1e7dd;
      color: #0f5132;
    }
  }
`;
