import styled from "styled-components";

export const MainContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  margin-top: 40px;
  font-family: "Arial", sans-serif;
`;

export const ImageCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  text-align: center;
  border-radius: 10px; /* 이미지를 부드럽게 만듭니다 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 이미지에 그림자를 추가 */
  margin-bottom: 20px; /* 이미지와 콘텐츠 사이의 여백 */
`;

export const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* 반응형 그리드 */
  gap: 20px; /* 아이템 간격 */
  margin-top: 20px;
`;

export const Item = styled.div`
  img {
    width: 100%;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 20px;
    font-weight: lighter;
    margin: 10px 0;
    color: #333;
  }

  p {
    font-size: 21px;
    font-weight: bold;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  gap: 8px;

  button {
    padding: 8px 12px;
    font-size: 14px;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    box &:hover {
      background-color: #007bff;
      color: #fff;
    }

    &:disabled {
      background-color: #f0f0f0;
      color: #ccc;
      cursor: not-allowed;
    }

    &.active {
      background-color: #007bff;
      color: #fff;
      font-weight: bold;
    }
  }
`;
