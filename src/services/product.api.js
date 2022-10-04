const apiUrl = "http://localhost:3000/api/products";

export async function getAllProducts(page) {
    try {
        let endpoint = `${apiUrl}?page=${page}`;
        let query = await fetch(endpoint);
        let data = await query.json();

        return data.products;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getQuantityProduct() {
    try {
        let endpoint = `${apiUrl}`;
        let query = await fetch(endpoint);
        let data = await query.json();

        return data.products.length;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getQuantityCategories() {
    try {
        let endpoint = `${apiUrl}`;
        let query = await fetch(endpoint);
        let data = await query.json();

        data.products.map((element) => element.category)
            .filter((element, index, array) => array.indexOf(element) === index)
            .map((category) => {
                return Object({ category: category, count: category.length });
            });
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getCategories() {
    try {
        let endpoint = `${apiUrl}`;
        let query = await fetch(endpoint);
        let data = await query.json();

        return data.products.indexOf((element) => element.category);
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getOneProduct(id) {
    try {
        let endpoint = `${apiUrl}?${id}`;
        let query = await fetch(endpoint);
        let data = await query.json();

        return data.products;
    } catch (error) {
        console.error(error);
        return [];
    }
}
