import * as S from "./style"

import React from "react";

type OrderCardProps = {
    status: string;
    date: string;
    title: string;
    price: string;
    quantity: number;
    imageUrl: string;
};

const ReturnCard: React.FC<OrderCardProps> = ({
    status,
    date,
    title,
    price,
    quantity,
    imageUrl,
}) => {
    return (
        <S.CardContainer>
            <S.Image src={imageUrl} alt={title} />
            <S.Details>
                <div className="status">
                    {status} · {date} 도착
                </div>
                <div className="title">{title}</div>
                <div className="price">
                    {price}원 <span>{quantity}개</span>
                </div>
            </S.Details>
            <S.Buttons>
                <button>현황 조회</button>
            </S.Buttons>
        </S.CardContainer>
    );
};

export default ReturnCard;