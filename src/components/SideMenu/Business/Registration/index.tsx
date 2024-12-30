import * as C from "@src/allFiles";
import * as S from "./style";

import { useState } from "react";
import AttachPhoto from "@assets/attach-photo.png"

const Registration = () => {
    const [deliveryArea, setDeliveryArea] = useState("");
    const [purchase, setPurchase] = useState(1);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setPreviewImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleIncrement = () => {
        setPurchase((prev) => prev + 1);
    };

    const handleDecrement = () => {
        setPurchase((prev) => (prev > 1 ? prev - 1 : 1));
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeliveryArea(e.target.value);
    };

    const triggerFileInput = () => {
        const fileInput = document.getElementById("hidden-file-input");
        fileInput?.click();
    };

    return (
        <S.RegistrationContainer>
            <S.TitleRegistration>상품등록</S.TitleRegistration>
            <S.MainCont>
                <S.InputCont>
                    <S.InputWrap>
                        <C.SelectField label="카테고리" />
                    </S.InputWrap>
                    <S.InputWrap>
                        <C.FarmField
                            label="상품명"
                            type="text"
                            change="productName"
                            placeholder="상품명"
                        />
                    </S.InputWrap>
                </S.InputCont>
                <S.InputCont>
                    <S.InputWrap>
                        <C.FarmField
                            label="희망단가"
                            type="text"
                            change="unitPrice"
                            placeholder="희망단가(원)"
                        />
                    </S.InputWrap>
                    <S.InputWrap>
                        <S.AreaCont>
                            <div className="spanCont">
                                <span>배송가능지역</span>
                            </div>
                            <div className="radioCont">
                                <div>
                                    <input
                                        type="radio"
                                        name="deliveryArea"
                                        value="all"
                                        onChange={handleRadioChange}
                                        checked={deliveryArea === "all"}
                                    />
                                    전체
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="deliveryArea"
                                        value="specific"
                                        onChange={handleRadioChange}
                                        checked={deliveryArea === "specific"}
                                    />
                                    지역
                                </div>
                            </div>
                        </S.AreaCont>
                    </S.InputWrap>
                </S.InputCont>
                <S.PurchaseCont>
                    <S.PurchaseWrap>
                        <div className="spanCont">
                            <span>수량</span>
                        </div>
                        <div className="countCont">
                            <div>
                                <button onClick={handleDecrement}>-</button>
                                <span>{purchase}</span>
                                <button onClick={handleIncrement}>+</button>
                            </div>
                        </div>
                    </S.PurchaseWrap>
                </S.PurchaseCont>
                <S.ImgCont>
                    <p>상품이미지</p>
                    <S.UploadWrap>
                        {previewImage ? (
                            <S.ImagePreview src={previewImage} />

                        ) : (
                            <>
                                <S.StyledFileInput
                                    id="hidden-file-input"
                                    type="file"
                                    onChange={handleFileChange}
                                    accept="image/*"
                                />
                                <S.CustomUploadButton onClick={triggerFileInput}>
                                    <img src={AttachPhoto} alt="사진첨부" />
                                    파일 선택
                                </S.CustomUploadButton>
                            </>
                        )}
                    </S.UploadWrap>
                    <S.RegistrationButton>등록하기</S.RegistrationButton>
                </S.ImgCont>
            </S.MainCont>
        </S.RegistrationContainer>
    );
};

export default Registration;
