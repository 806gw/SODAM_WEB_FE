import styled from "styled-components";

export const SideMenuContainer = styled.div`
  width: 400px;
  margin: 5px 0;
  padding: 20px;
  display: flex;
  gap: 0 20px;
`;

export const MenuItem = styled.li`
  list-style: none;
  margin: 10px 0;
  width: 79px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.3s;
  border: solid 1px #949494;
  &:hover,
  &.active {
    background: #1fad1f;
    color: #ffffff;
  }
`;
