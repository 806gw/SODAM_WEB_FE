import * as S from "./style"

import Logo from "@assets/footer-logo.png"

const Footer = () => {
    return (
        <S.TopCont>
            <S.InnerCont>
                <img src={Logo} alt="logo" className="logo" />
                <h2 style={{ fontSize: 20 }}>2024 2학기 캡스톤 프로젝트</h2>
                <span style={{ fontSize: 16 }}>Copyrights © 초총전대 봉양레인저 <br /> All right reversed</span>
            </S.InnerCont>
        </S.TopCont>
    )
}
export default Footer