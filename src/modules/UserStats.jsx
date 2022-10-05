import { useState, useEffect, useParams } from "react";
import * as API from "../services/user.api";

export function UserQuantity() {
    const [quantity, setQuantity] = useState([]);
    useEffect(() => {
        API.getQuantityUsers().then((data) => setQuantity(data));
    }, []);

    return (
        <div>
            <h2>Cantidad de usuarios</h2>
            {quantity}
        </div>
    );
}

export function LastUser() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        API.getAllUsers().then((data) => setUser(data.find((user) => user.id == data.length)));
    }, []);

    return (
        <div>
            <h2>El ultimo usuario</h2>
            {user ? user.name : null}
        </div>
    );
}
