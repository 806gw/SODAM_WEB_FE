import * as R from "@src/allFiles"
import * as S from "./style";

export default function SignIn() {
    return (
        <S.TopCont>
            <S.LoginInputCont>
                <S.LoginText>로그인</S.LoginText>
                <S.LoginInputWrap>
                    <R.InputField
                        label="아이디"
                        type="text"
                        placeholder="아이디"
                        change="password"
                    />
                    <R.PasswordField />
                    <S.LoginBtn type="submit">로그인</S.LoginBtn>
                </S.LoginInputWrap>
                <S.LinkBox>
                    <S.LinkTag to="/signup/personal">계정이 없으신가요?</S.LinkTag>
                </S.LinkBox>
            </S.LoginInputCont>
            <R.Copyright />
        </S.TopCont>
    );
}