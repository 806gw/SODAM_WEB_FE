import * as S from "./style";

import React from "react";
import InputField from "@src/components/InputField"
import Logo from "@assets/header-logo.png"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function BusinessSignIn() {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <S.TopCont>
            <S.SignUpBusinessInputCont>
                <S.LoginText>회원가입</S.LoginText>
                <S.LoginInputWrap>
                    <InputField
                        label="아이디"
                        type="text"
                        placeholder="아이디"
                        change="id"
                    />
                    <S.InputCont>
                        <InputField
                            label="비밀번호"
                            type={showPassword ? "text" : "password"}
                            placeholder="비밀번호"
                            change="password"
                        />
                        <S.PasswordToggleButton type="button" onClick={togglePasswordVisibility}>
                            {showPassword ? <AiFillEyeInvisible className="show_logo" /> : <AiFillEye className="show_logo" />}
                        </S.PasswordToggleButton>
                    </S.InputCont>
                    <InputField
                        label="이메일"
                        type="email"
                        placeholder="이메일"
                        change="email"
                    />
                    <InputField
                        label="사업자등록번호"
                        type="text"
                        placeholder="사업자등록번호"
                        change="businessNumber"
                    />
                    <InputField
                        label="통신판매업신고번호"
                        type="text"
                        placeholder="통신판매업신고번호"
                        change="mailOrderNumber"
                    />
                    <InputField
                        label="사업자명"
                        type="text"
                        placeholder="사업자명"
                        change="businessName"
                    />
                    <InputField
                        label="농장 주소"
                        type="text"
                        placeholder="농장 주소"
                        change="farmAddress"
                    />
                    <InputField
                        label="농장명"
                        type="text"
                        placeholder="농장명"
                        change="farmName"
                    />
                    <InputField
                        label="정산계좌"
                        type="text"
                        placeholder="정산계좌"
                        change="settlement"
                    />
                    <S.LoginBtn type="submit">회원가입</S.LoginBtn>
                </S.LoginInputWrap>
                <S.LinkBox>
                    <S.LinkTagLeft to="/signup/personal">구매자이신가요?</S.LinkTagLeft>
                    <S.LinkTagRight to="/login">계정이 있으신가요?</S.LinkTagRight>
                </S.LinkBox>
            </S.SignUpBusinessInputCont>
            <S.LoginFooter>
                <img src={Logo} alt="logo" className="logo" />
                <p>Copyright © 초총전대 봉양레인저</p>
            </S.LoginFooter>
        </S.TopCont>
    );
}