import { useState, useEffect } from "react";
import * as API from "../services/user.api";

export function UserQuantity() {
    const [quantity, setQuantity] = useState(
        API.getUserQuantity().then((data) => setQuantity(data))
    );

    return (
        <div>
            <h2>Cantidad de usuarios</h2>
            {quantity}
        </div>
    );
}

export function LastUser() {
    const [user, setUser] = useState(
        API.getUser().then((data) => setUser(data))
    );

    return (
        <div>
            <h2>El ultimo usuario</h2>
            {user}
        </div>
    )
}
