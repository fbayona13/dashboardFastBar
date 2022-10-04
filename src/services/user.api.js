const apiUrl = "http://localhost:3000/api/users";

export async function getAllUsers() {
    try {
        let endpoint = `${apiUrl}`;
        let query = await fetch(endpoint);
        let data = await query.json();

        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getQuantityUsers() {
    try {
        let endpoint = `${apiUrl}`;
        let query = await fetch(endpoint);
        let data = await query.json();

        return data.length;
    } catch (error) {
        console.error(error);
        return [];
    }
}
export async function getLastUser(id) {
    try {
        let lastId = id.length - 1;
        let endpoint = `${apiUrl}?${lastId}`;
        let query = await fetch(endpoint);
        let data = await query.json();

        return data.users;
    } catch (error) {
        console.error(error);
        return [];
    }
}
