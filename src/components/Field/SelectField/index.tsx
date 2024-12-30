import * as S from "./style";
import { useState } from "react";

interface SelectFieldProps {
    label: string;
}

const SelectField: React.FC<SelectFieldProps> = ({ label }) => {
    const [category, setCategory] = useState("");

    const handlerSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(e.target.value);
    };

    return (
        <S.TopCont>
            <S.MainCont>
                <S.SpanCont>
                    <span>{label}</span>
                </S.SpanCont>
                <S.InputCont>
                    <select onChange={handlerSelect} value={category}>
                        <option value="fruit">청과</option>
                        <option value="livestock">축산</option>
                        <option value="grain">양곡</option>
                        <option value="other">기타</option>
                    </select>
                </S.InputCont>
            </S.MainCont>
        </S.TopCont>
    );
};

export default SelectField;
