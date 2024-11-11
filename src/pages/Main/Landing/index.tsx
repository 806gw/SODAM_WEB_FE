import * as S from "./style"

import Symbol from "@assets/header-logo.png"
import Vegetable from "@assets/vegetable.png"

const Landing = () => {
    return (
        <S.TopCont>
            <S.IntroSect>
                <S.InnerCont>
                    <S.IntroLeft>
                        <span className="introTitle">소담한 농산물을 집에서 편리하게</span>
                        <img src={Symbol} alt="symbol" className="introSymbol" />
                        <button type="submit" className="signInBtn">로그인하기</button>
                    </S.IntroLeft>
                    <S.IntroRight>
                        <img src={Vegetable} alt="vegetable" className="introImg" />
                    </S.IntroRight>
                </S.InnerCont>
            </S.IntroSect>
            <S.FeaturesSect></S.FeaturesSect>
            <S.ContactSect></S.ContactSect>
        </S.TopCont>
    )
}
export default Landing