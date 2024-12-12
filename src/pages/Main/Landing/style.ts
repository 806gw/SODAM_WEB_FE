import styled from "styled-components";

export const TopCont = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InnerIntro = styled.div`
  width: 100%;
  max-width: 1320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InnerFeatures = styled.div`
  width: 100%;
  max-width: 967px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InnerContact = styled.div`
  width: 100%;
  max-width: 967px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IntroSect = styled.div`
  width: 100%;
  height: 664px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3fcf3;
`;

export const IntroLeft = styled.div`
  display: flex;
  flex-direction: column;

  .introTitle {
    font-size: 24px;
    font-weight: 900;
  }

  .introSymbol {
    width: 198px;
    margin-top: 30px;
  }

  .signInBtn {
    width: 160px;
    height: 54px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    background-color: #1fad1f;
    color: #fff;
    cursor: pointer;
    margin-top: 80px;
    font-weight: 500;
    transition: background-color 0.15s ease-in;

    &:hover {
      background-color: #1ca11c;
    }
  }
`;

export const IntroRight = styled.div`
  .introImg {
    width: 392.7px;
  }
`;

export const FeaturesSect = styled.div`
  width: 100%;
  height: 664px;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeaturesLeft = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;

  .featureImg {
    width: 408px;
    height: auto;
    margin-top: 127px;
  }
`;

export const FeaturesRight = styled.div`
  color: #2a2a2a;

  .featuresTitle {
    font-size: 40px;
  }

  .featuresDesc {
    font-size: 20px;
  }
`;

export const ContactSect = styled.div`
  width: 100%;
  height: 664px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3fcf3;
`;

export const ContactLeft = styled.div`
  color: #2a2a2a;

  .contactTitle {
    font-size: 40px;
  }

  .contactDesc {
    font-size: 20px;
  }
`;

export const ContactRight = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;
  .contactImg {
    width: 484.39px;
    height: auto;
    margin-top: 182px;
  }
`;
