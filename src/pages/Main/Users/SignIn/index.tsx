import * as S from "./style";

import React from "react";
import InputField from "@src/components/InputField"
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Logo from "@assets/header-logo.png"


export default function SignIn() {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <S.TopCont>
            <S.LoginInputCont>
                <S.LoginText>로그인</S.LoginText>
                <S.LoginInputWrap>
                    <InputField
                        label="아이디"
                        type="text"
                        placeholder="아이디"
                        change="password"
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
                    <S.LoginBtn type="submit">로그인</S.LoginBtn>
                </S.LoginInputWrap>
                <S.LinkBox>
                    <S.LinkTag to="/signup/personal">계정이 없으신가요?</S.LinkTag>
                </S.LinkBox>
            </S.LoginInputCont>
            <S.LoginFooter>
                <img src={Logo} alt="logo" className="logo" />
                <p>Copyright © 초총전대 봉양레인저</p>
            </S.LoginFooter>
        </S.TopCont>
    );
}