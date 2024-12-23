import * as R from "@src/allFiles"
import * as S from "./style";

export default function BusinessSignIn() {
    return (
        <S.TopCont>
            <S.SignUpBusinessInputCont>
                <S.LoginText>회원가입</S.LoginText>
                <S.LoginInputWrap>
                    <R.InputField
                        label="아이디"
                        type="text"
                        placeholder="아이디"
                        change="id"
                    />
                    <R.PasswordField />
                    <R.InputField
                        label="이메일"
                        type="email"
                        placeholder="이메일"
                        change="email"
                    />
                    <R.InputField
                        label="사업자등록번호"
                        type="text"
                        placeholder="사업자등록번호"
                        change="businessNumber"
                    />
                    <R.InputField
                        label="통신판매업신고번호"
                        type="text"
                        placeholder="통신판매업신고번호"
                        change="mailOrderNumber"
                    />
                    <R.InputField
                        label="사업자명"
                        type="text"
                        placeholder="사업자명"
                        change="businessName"
                    />
                    <R.InputField
                        label="농장 주소"
                        type="text"
                        placeholder="농장 주소"
                        change="farmAddress"
                    />
                    <R.InputField
                        label="농장명"
                        type="text"
                        placeholder="농장명"
                        change="farmName"
                    />
                    <R.InputField
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
            <R.Copyright />
        </S.TopCont>
    );
}