import * as C from "@src/allFiles"
import * as S from "./style";

export default function UserSignIn() {
    return (
        <S.TopCont>
            <S.SignUpUserInputCont>
                <S.LoginText>회원가입</S.LoginText>
                <S.LoginInputWrap>
                    <C.InputField
                        label="아이디"
                        type="text"
                        placeholder="아이디"
                        change="id"
                    />
                    <C.PasswordField />
                    <C.InputField
                        label="이메일"
                        type="email"
                        placeholder="이메일"
                        change="email"
                    />
                    <C.InputField
                        label="이름"
                        type="text"
                        placeholder="이름"
                        change="name"
                    />
                    <C.InputField
                        label="전화번호"
                        type="text"
                        placeholder="전화번호 (예시: 010-1234-5678)"
                        change="phone"
                    />
                    <C.InputField
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
            <C.Copyright />
        </S.TopCont>
    );
}