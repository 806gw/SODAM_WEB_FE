import * as S from "./style"

import React from "react";

interface SideMenuProps {
    MypageTitle: string;
    selectedMenu: string;
    menuItemProps: string[];
    setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

const SideMenu: React.FC<SideMenuProps> = ({ menuItemProps, MypageTitle, selectedMenu, setSelectedMenu }) => {
    const menuItems: string[] = menuItemProps;

    return (
        <S.SideMenuContainer>
            <S.Title>{MypageTitle}</S.Title>
            {menuItems.map((item) => (
                <S.MenuItem
                    key={item}
                    className={selectedMenu === item ? "active" : ""}
                    onClick={() => setSelectedMenu(item)}
                >
                    {item}
                </S.MenuItem>
            ))}
        </S.SideMenuContainer>
    );
};

export default SideMenu;