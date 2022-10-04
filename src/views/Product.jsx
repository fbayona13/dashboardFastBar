import { useState, useEffect } from "react";
import * as API from "../services/product.api";
import { Link } from "react-router-dom";
import {ProductQuantity, CategoriesQuantity} from "./ProductsStats";

export default function Product() {
    const [list, setList] = useState([]);
    const [page, setPage] = useState(0);
    useEffect(() => {
        API.getAllProducts(page).then((data) => setList(data));
    }, [page]);
    const next = () => setPage(page + 1);
    const previous = () => setPage(page - 1);

    return (
        <div>
            <h2>Products List</h2>
            {list.map((product) => (
                <li key={product.id}>
                    <Link to={`/product/${product.id}`}>
                        {product.drinkName}
                    </Link>
                </li>
            ))}
            <button onClick={next}>Next</button>
            <button onClick={previous}>Prev</button>

            <ProductQuantity />
            <CategoriesQuantity />

        </div>
    );
}
