import * as S from "./style"

import React from "react";

interface SideMenuProps {
    selectedMenu: string;
    setSelectedMenu: React.Dispatch<React.SetStateAction<string>>;
}

const TopMenu: React.FC<SideMenuProps> = ({ selectedMenu, setSelectedMenu }) => {
    const menuItems: string[] = ["청과", "축산", "양곡", "기타"];

    return (
        <S.SideMenuContainer>
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

export default TopMenu;