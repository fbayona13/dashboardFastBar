import { useState, useEffect } from "react";
import * as API from "../services/product.api";
import { Link } from "react-router-dom";
import { ProductQuantity, CategoriesQuantity } from "../modules/ProductsStats";
import "../sass/product.scss";

export default function Product() {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);
    useEffect(() => {
        API.getAllProducts(page).then((data) => setList(data));
    }, [page]);
    const next = () => setPage(page + 1);
    const previous = () => setPage(page - 1);

    return (
        <div className="product-list">
            <div>
                <h2 className="h2-product-list">Products List</h2>
                {list.map((product) => (
                    <li key={product.id}>{product.drinkName}</li>
                ))}
                <div className="div-button">
                    <button onClick={next}>Next</button>
                    <button onClick={previous}>Prev</button>
                </div>
            </div>
            <div className="div-components">
                <ProductQuantity />
                <CategoriesQuantity />
            </div>
        </div>
    );
}
