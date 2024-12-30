import * as C from "@src/allFiles"
import * as S from "./style"

import React, { useState } from "react";

const BusinessMypage = () => {
    const [selectedMenu, setSelectedMenu] = useState("상품등록");

    const renderContent = () => {
        switch (selectedMenu) {
            case "상품등록":
                return <C.Registration />;
            case "재고관리":
                return <C.LikeList />;
            default:
                return <S.NotPage>존재하지 않는 페이지 입니다.</S.NotPage>;
        }
    };

    return (
        <>
            <S.Inner>
                <S.TopCont>
                    <C.SideMenu
                        MypageTitle="마이샵"
                        menuItemProps={["상품등록", "재고관리"]}
                        selectedMenu={selectedMenu}
                        setSelectedMenu={setSelectedMenu}
                    />
                    {renderContent()}
                </S.TopCont>
            </S.Inner>
            <C.Footer />
        </>
    )
}
export default BusinessMypage