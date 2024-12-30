import * as C from "@src/allFiles"
import * as S from "./style"

import React, { useState } from "react";
import Vertical from "@assets/vertical.png"

const products = [
    { id: 1, category: "청과", name: "의성마늘 1kg", price: 6500, image: "path/to/garlic.jpg" },
    { id: 2, category: "청과", name: "경북의성 사과 5kg", price: 21900, image: "path/to/apple.jpg" },
    { id: 3, category: "청과", name: "경북의성 사과 5kg", price: 21900, image: "path/to/apple.jpg" },
    { id: 4, category: "청과", name: "경북의성 사과 5kg", price: 21900, image: "path/to/apple.jpg" },
    { id: 5, category: "축산", name: "GAP 인증 복숭아", price: 6500, image: "path/to/peach.jpg" },
    { id: 6, category: "축산", name: "GAP 인증", price: 6500, image: "path/to/peach.jpg" },
    { id: 7, category: "청과", name: "의성마늘 2kg (팩)", price: 6500, image: "path/to/garlic_pack.jpg" },
    { id: 8, category: "기타", name: "손보석", price: 100000000000000000000000000000000, image: "path/to/garlic_pack.jpg" },
];

const ITEMS_PER_PAGE = 4;

const PersonalHome: React.FC = () => {
    const [selectedMenu, setSelectedMenu] = useState("청과");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredProducts = products.filter(product => product.category === selectedMenu);

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
    const displayedProducts = filteredProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );


    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        };
    }

    return (
        <S.MainContainer>
            <S.ImageCont>
                <S.Image src={Vertical} alt="Mainpage" />
            </S.ImageCont>
            <C.TopMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            <S.ItemList>
                {displayedProducts.map(product => (
                    <S.Item key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}원</p>
                    </S.Item>
                ))}
            </S.ItemList>
            <C.Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </S.MainContainer>
    );
};

export default PersonalHome;