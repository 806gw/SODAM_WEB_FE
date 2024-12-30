import * as S from "./style";

import React from "react";

type OrderCardProps = {
    status: string;
    date: string;
    title: string;
    price: string;
    quantity: number;
    imageUrl: string;
};

const OrderCard: React.FC<OrderCardProps> = ({
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
                    {status} · <span style={{ color: "#1E7B1E" }}>{date} 도착</span>
                </div>
                <div className="title">{title}</div>
                <div className="price">
                    {price}원 <span>{quantity}개</span>
                </div>
            </S.Details>
            <S.Buttons>
                <button>배송조회</button>
                <button>교환/반품 신청</button>
                <button>장바구니 담기</button>
            </S.Buttons>
        </S.CardContainer>
    );
};

export default OrderCard;