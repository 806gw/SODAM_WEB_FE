import * as S from "./style"

import React from "react";
import ReturnCard from "../ReturnCard";

const orders = [
    {
        status: "반품 완료",
        date: "12/12",
        title: "의성마늘 1kg",
        price: "6,500",
        quantity: 1,
        imageUrl: "garlic.jpg",
    },
    {
        status: "교환 완료",
        date: "8/12",
        title: "경북의성 사과 5kg",
        price: "42,900",
        quantity: 20,
        imageUrl: "apple.jpg",
    },
];

const ReturnList = () => {
    return (
        <S.OrderListContainer>
            <S.TitleOrder>반품/교환 내역</S.TitleOrder>
            {orders.map((order, index) => (
                <ReturnCard key={index} {...order} />
            ))}
        </S.OrderListContainer>
    );
};

export default ReturnList;