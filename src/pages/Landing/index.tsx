import * as C from "@src/allFiles"
import * as S from "./style"

import Symbol from "@assets/header-logo.png"
import Vegetable from "@assets/vegetable.png"
import FeaturesImg from "@assets/features-sect.png"
import ContactImg from "@assets/contact-sect.png"
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <>
            <S.TopCont>
                <S.IntroSect>
                    <S.InnerIntro>
                        <S.IntroLeft>
                            <span className="introTitle">소담한 농산물을 집에서 편리하게</span>
                            <img src={Symbol} alt="symbol" className="introSymbol" />
                            <Link to={"/login"} className="signInBtn">로그인하기</Link>
                        </S.IntroLeft>
                        <S.IntroRight>
                            <img src={Vegetable} alt="vegetable" className="introImg" />
                        </S.IntroRight>
                    </S.InnerIntro>
                </S.IntroSect>
                <S.FeaturesSect>
                    <S.InnerFeatures>
                        <S.FeaturesLeft>
                            <img src={FeaturesImg} alt="featureImg" className="featureImg" />
                        </S.FeaturesLeft>
                        <S.FeaturesRight>
                            <h1 className="featuresTitle">투명하게 간편한 <br /> 구매/판매 정보</h1>
                            <span className="featuresDesc">판매자, 구매자 모두 상품 전체나 수익 등 중요한 정보를 <br /> 손쉽게 확인할 수 있어요.</span>
                        </S.FeaturesRight>
                    </S.InnerFeatures>
                </S.FeaturesSect>
                <S.ContactSect>
                    <S.InnerContact>
                        <S.ContactLeft>
                            <h1 className="contactTitle">농사 일지를 통한 <br /> 브랜딩 지원</h1>
                            <span className="contactDesc">농사 일지를 작성하면 <br /> AI가 그림 일기 형식으로 전환해줘요.</span>
                        </S.ContactLeft>
                        <S.ContactRight>
                            <img src={ContactImg} alt="contactImg" className="contactImg" />
                        </S.ContactRight>
                    </S.InnerContact>
                </S.ContactSect>
            </S.TopCont>
            <C.Footer />
        </>
    )
}
export default Landing