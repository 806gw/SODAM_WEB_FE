import * as C from "@src/allFiles"
import * as S from "./style"

const Diary = () => {
    return (
        <>
            <S.TopCont>
                <S.Inner>
                    <h1 style={{ fontSize: 24 }}>농가 일지 작성하기</h1>
                    <S.InputWrap>
                        <C.FarmField label="날짜" type="date" change="date" />
                    </S.InputWrap>
                    <S.DiaryWrap>
                        <textarea name="" id="" placeholder="오늘의 영농 작업 상황을 자유롭게 기록해보세요."></textarea>
                    </S.DiaryWrap>
                    <C.DiaryImg />
                </S.Inner>
            </S.TopCont>
            <C.Footer />
        </>
    )
}
export default Diary