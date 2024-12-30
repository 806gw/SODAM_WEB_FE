import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 5px;

  button {
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #2a2a2a;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    box-shadow: 1px 2px 6px -1px gray;
    &:hover {
      background-color: #dde6dd;
      color: #000;
    }

    &:disabled {
      background-color: #f0f0f0;
      color: #ccc;
      border: none;
      cursor: not-allowed;
    }

    &.active {
      border: 1px solid #1e7b1e;
      background-color: #f3fcf3;
      color: #1e7b1e;
    }
  }
`;
