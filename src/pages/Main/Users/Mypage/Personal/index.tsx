import * as C from "@src/allFiles"
import * as S from "./style"

import React, { useState } from "react";

const PersonalMypage = () => {
    const [selectedMenu, setSelectedMenu] = useState("주문내역");

    const renderContent = () => {
        switch (selectedMenu) {
            case "주문내역":
                return <C.OrderList />;
            case "반품/교환 신청":
                return <C.ReturnList />;
            case "찜 리스트":
                return <C.LikeList />;
            default:
                return <S.NotPage>존재하지 않는 페이지 입니다.</S.NotPage>;
        }
    };

    return (
        <>
            <S.TopCont>
                <C.SideMenu
                    MypageTitle="마이페이지"
                    menuItemProps={["주문내역", "반품/교환 신청", "찜 리스트"]}
                    selectedMenu={selectedMenu}
                    setSelectedMenu={setSelectedMenu}
                />
                {renderContent()}
            </S.TopCont>
            <C.Footer />
        </>
    )
}
export default PersonalMypage