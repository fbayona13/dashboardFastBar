import { useState, useEffect } from "react";
import * as API from "../services/product.api";

export function ProductQuantity() {
    const [quantity, setQuantity] = useState([]);
    useEffect(() => {
        API.getQuantityProduct().then((product) => setQuantity(product));
    });

    return (
        <div>
            <h2>Cantidad de productos: </h2>
            {quantity}
        </div>
    );
}

export function CategoriesQuantity() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        API.getQuantityCategories().then((categories) =>
            setCategories(categories)
        );
    });
    return (
        <div>
            <h2>Cantidad de categorias: </h2>
            {categories}
        </div>
    );
}
