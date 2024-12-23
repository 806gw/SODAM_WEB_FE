import * as R from "@src/allFiles"
import * as S from "./style";

import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const PasswordField = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <S.InputCont>
            <R.InputField
                label="비밀번호"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호"
                change="password"
            />
            <S.PasswordToggleButton type="button" onClick={togglePasswordVisibility}>
                {showPassword ? <AiFillEyeInvisible className="show_logo" /> : <AiFillEye className="show_logo" />}
            </S.PasswordToggleButton>
        </S.InputCont>
    )
}
export default PasswordField