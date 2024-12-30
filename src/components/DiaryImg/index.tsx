import React, { useState } from "react";
import * as S from "./style";

const DiaryImg = () => {
    const [selectedOption, setSelectedOption] = useState<string>("aiImg");
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
        if (e.target.value === "aiImg") {
            setPreviewImage(null);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreviewImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        const fileInput = document.getElementById("hidden-file-input");
        fileInput?.click();
    };

    return (
        <S.TopCont>
            <S.LeftCont>
                <S.LeftWrap>
                    <S.InputWrap>
                        <label>
                            <input
                                type="radio"
                                name="diary-radio"
                                value="aiImg"
                                checked={selectedOption === "aiImg"}
                                onChange={handleRadioChange}
                            />
                            AI 그림 사용하기
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="diary-radio"
                                value="file"
                                checked={selectedOption === "file"}
                                onChange={handleRadioChange}
                            />
                            직접 사진 첨부
                        </label>
                    </S.InputWrap>
                    <span>농가 일지를 작성하면 AI가 글을 분석해 적절한 그림을 만들어줘요.</span>
                    <button>글 등록하기</button>
                </S.LeftWrap>
                <S.StyledArea>
                    {selectedOption === "aiImg" ? (
                        <S.UploadWrap>
                            <S.UploadBtn>AI 사진 만들기</S.UploadBtn>
                        </S.UploadWrap>
                    ) : (
                        <S.UploadWrap>
                            {previewImage ? (
                                <S.PreviewImage src={previewImage} alt="Preview" />
                            ) : (
                                <>
                                    <S.StyledFileInput
                                        id="hidden-file-input"
                                        type="file"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                    />
                                    <S.CustomUploadButton onClick={triggerFileInput}>
                                        파일 선택
                                    </S.CustomUploadButton>
                                </>
                            )}
                        </S.UploadWrap>
                    )}
                </S.StyledArea>
            </S.LeftCont>
        </S.TopCont >
    );
};

export default DiaryImg;