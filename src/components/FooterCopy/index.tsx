import * as S from "./style"

import Logo from "@assets/header-logo.png"

const FooterCopy = () => {
    return (
        <S.TopCont>
            <img src={Logo} alt="logo" className="logo" />
            <p>Copyright © 초총전대 봉양레인저</p>
        </S.TopCont>
    )
}
export default FooterCopy