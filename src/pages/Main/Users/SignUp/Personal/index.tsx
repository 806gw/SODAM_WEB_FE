import * as S from "./style";

import React from "react";
import InputField from "@src/components/InputField"
import Logo from "@assets/header-logo.png"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function UserSignIn() {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <S.TopCont>
            <S.SignUpUserInputCont>
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
                        label="이름"
                        type="text"
                        placeholder="이름"
                        change="name"
                    />
                    <InputField
                        label="전화번호"
                        type="text"
                        placeholder="전화번호 (예시: 010-1234-5678)"
                        change="phone"
                    />
                    <InputField
                        label="배송지"
                        type="text"
                        placeholder="배송지"
                        change="userAddress"
                    />
                    <S.LoginBtn type="submit">회원가입</S.LoginBtn>
                </S.LoginInputWrap>
                <S.LinkBox>
                    <S.LinkTagLeft to="/signup/business">사업자이신가요?</S.LinkTagLeft>
                    <S.LinkTagRight to="/login">계정이 있으신가요?</S.LinkTagRight>
                </S.LinkBox>
            </S.SignUpUserInputCont>
            <S.LoginFooter>
                <img src={Logo} alt="logo" className="logo" />
                <p>Copyright © 초총전대 봉양레인저</p>
            </S.LoginFooter>
        </S.TopCont>
    );
}