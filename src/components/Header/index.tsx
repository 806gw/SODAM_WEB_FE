import * as S from './style';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { LuPenLine } from 'react-icons/lu';
import Logo from '@assets/header-logo.png';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState<'consumer' | 'buyer' | null>(null);

    useEffect(() => {
        setIsLoggedIn(false);
        setUserType('consumer');
    }, []);

    return (
        <S.HeaderCont>
            <S.InnerCont>
                <S.HeaderLeft>
                    <Link to='/'>
                        <img src={Logo} alt='' />
                    </Link>
                </S.HeaderLeft>
                <S.HeaderRight>
                    {isLoggedIn ? (
                        userType === 'consumer' ? (
                            <>
                                <S.SearchBar>
                                    <input
                                        type='text'
                                        placeholder='원하시는 상품을 검색해보세요.'
                                    />
                                    <Link to='/search'>
                                        <IoSearch />
                                    </Link>
                                </S.SearchBar>
                                <Link to='/cart'>
                                    <FiShoppingCart />
                                </Link>
                                <Link to='/mypage'>
                                    <FiUser />
                                </Link>
                            </>
                        ) : (
                            <>
                                <S.SearchBar>
                                    <input
                                        type='text'
                                        placeholder='원하시는 상품을 검색해보세요.'
                                    />
                                    <Link to='/search'>
                                        <IoSearch />
                                    </Link>
                                </S.SearchBar>
                                <Link to='/diary'>
                                    <LuPenLine />
                                </Link>
                                <Link to='/mypage'>
                                    <FiUser />
                                </Link>
                            </>
                        )
                    ) : (
                        <>
                            <Link to='/login'>
                                <p>로그인</p>
                            </Link>
                            <Link to='/signup/personal'>
                                <p>회원가입</p>
                            </Link>
                        </>
                    )}
                </S.HeaderRight>
            </S.InnerCont>
        </S.HeaderCont>
    );
};

export default Header;