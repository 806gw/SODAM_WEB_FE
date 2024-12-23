import * as S from "./style"

import { useState } from "react";

interface InputFieldProps {
    label?: string;
    type: string;
    placeholder?: string;
    change: string;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    type,
    placeholder,
    change,
}) => {

    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState('')
    const [mailOrderBusinessReportNumber, setMailOrderBusinessReportNumber] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [farmName, setFarmName] = useState('')
    const [farmaddress, setFarmAddress] = useState('')
    const [settlementAccount, setSettlementAccount] = useState('')
    const [userAddress, setUserAddress] = useState('')
    const [userName, setUserName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    function handlerInput(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value
        switch (change) {
            case 'id':
                setId(value)
                break
            case 'password':
                setPassword(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'businessNumber':
                setBusinessRegistrationNumber(value)
                break
            case 'mailOrderNumber':
                setMailOrderBusinessReportNumber(value)
                break
            case 'businessName':
                setBusinessName(value)
                break
            case 'farmName':
                setFarmName(value)
                break
            case 'farmAddress':
                setFarmAddress(value)
                break
            case 'settlement':
                setSettlementAccount(value)
                break
            case 'phone':
                setPhoneNumber(value)
                break
            case 'name':
                setUserName(value)
                break
            case 'userAddress':
                setUserAddress(value)
                break
            default:
                console.log('존재하는 Input이 없습니다.')
                break
        }
    }

    return (
        <S.InputCont>
            <span>{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                onChange={handlerInput}
            />
        </S.InputCont>
    );
};

export default InputField;