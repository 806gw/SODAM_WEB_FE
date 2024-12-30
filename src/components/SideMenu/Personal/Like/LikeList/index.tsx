import * as S from "./style"

import React from "react";
import LikeCard from "../LikeCard"

const orders = [
    {
        title: "의성마늘 1kg",
        price: "6,500",
        quantity: 1,
        imageUrl: "garlic.jpg",
    },
    {
        title: "경북의성 사과 5kg",
        price: "42,900",
        quantity: 20,
        imageUrl: "apple.jpg",
    },
];

const LikeList = () => {
    return (
        <S.OrderListContainer>
            <S.TitleOrder>찜 목록</S.TitleOrder>
            {orders.map((order, index) => (
                <LikeCard key={index} {...order} />
            ))}
        </S.OrderListContainer>
    );
};

export default LikeList;