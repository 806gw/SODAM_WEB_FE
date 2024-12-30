import * as S from "./style";

import React from "react";
import OrderCard from "../OrderCard";

const orders = [
    {
        status: "배송 중",
        date: "12/12",
        title: "의성마늘 1kg",
        price: "6,500",
        quantity: 1,
        imageUrl: "garlic.jpg",
    },
    {
        status: "배송 완료",
        date: "8/12",
        title: "경북의성 사과 5kg",
        price: "42,900",
        quantity: 20,
        imageUrl: "apple.jpg",
    },
];

const OrderList = () => {
    return (
        <S.OrderListContainer>
            <S.TitleOrder>주문내역</S.TitleOrder>
            {orders.map((order, index) => (
                <OrderCard key={index} {...order} />
            ))}
        </S.OrderListContainer>
    );
};

export default OrderList;