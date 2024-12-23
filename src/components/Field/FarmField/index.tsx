import * as S from "./style"

import { useState } from "react";

interface InputFieldProps {
    label?: string;
    type: string;
    placeholder?: string;
    change: string;
}

const FarmField: React.FC<InputFieldProps> = ({
    label,
    type,
    placeholder,
    change,
}) => {
    const [date, setDate] = useState('')
    const [category, setCategory] = useState('')
    const [productName, setProductName] = useState('')
    const [unitPrice, setUnitPrice] = useState('')

    function handlerInput(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        switch (change) {
            case "data":
                setDate(value)
                break
            case "category":
                setCategory(value)
                break
            case "productName":
                setProductName(value)
                break
            case "unitPrice":
                setUnitPrice(value)
                break
            default:
                console.log('존재하는 Input이 없습니다.')
                break
        }
    }


    return (

        <S.TopCont>
            <S.MainCont>
                <S.SpanCont>
                    <span>{label}</span>
                </S.SpanCont>
                <S.InputCont inputType={type}>
                    <input
                        type={type}
                        placeholder={placeholder}
                        onChange={handlerInput}
                    />
                </S.InputCont>
            </S.MainCont>
        </S.TopCont>
    )
}
export default FarmField