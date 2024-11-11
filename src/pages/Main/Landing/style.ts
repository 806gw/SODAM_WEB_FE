import styled from "styled-components";

export const TopCont = styled.div`
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
`;

export const IntroSect = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3fcf3;
`;

export const IntroLeft = styled.div`
  display: flex;
  flex-direction: column;

  .introTitle {
    font-size: 32px;
    font-weight: 900;
  }

  .introSymbol {
    width: 286px;
    margin-top: 30px;
  }

  .signInBtn {
    width: 210px;
    height: 64px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    background-color: #1fad1f;
    color: #fff;
    cursor: pointer;
    margin-top: 80px;
    font-weight: 900;
    transition: background-color 0.15s ease-in;

    &:hover {
      background-color: #1ca11c;
    }
  }
`;

export const IntroRight = styled.div`
  .introImg {
    width: 403px;
  }
`;

export const FeaturesSect = styled.div``;

export const ContactSect = styled.div``;
