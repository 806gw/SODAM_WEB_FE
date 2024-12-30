import * as S from "./style"

import React from "react";

type OrderCardProps = {
    title: string;
    price: string;
    quantity: number;
    imageUrl: string;
};

const OrderCard: React.FC<OrderCardProps> = ({
    title,
    price,
    quantity,
    imageUrl,
}) => {
    return (
        <S.CardContainer>
            <S.Image src={imageUrl} alt={title} />
            <S.Details>
                <div className="title">{title}</div>
                <div className="price">
                    {price}원 <span>{quantity}개</span>
                </div>
            </S.Details>
        </S.CardContainer>
    );
};

export default OrderCard;