import styled from "styled-components";

export const InputCont = styled.div`
  position: relative;
`;

export const PasswordToggleButton = styled.button`
  position: absolute;
  right: 10px;
  top: 79%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;

  .show_logo {
    font-size: 20px;
    color: #707070;
  }
`;
