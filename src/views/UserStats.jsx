import { useState, useEffect } from "react";
import * as API from "../services/user.api";

export function UserQuantity() {
    const [quantity, setQuantity] = useState([]);
    useEffect(() => {
        API.getQuantityUsers().then((data) => setQuantity(data));
    });

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
        API.getLastUser().then((data) => setUser(data));
    });

    return (
        <div>
            <h2>El ultimo usuario</h2>
            {user}
        </div>
    );
}
