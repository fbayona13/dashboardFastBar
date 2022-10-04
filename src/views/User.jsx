import { useState, useEffect } from "react";
import * as API from "../services/user.api";
import { UserQuantity, LastUser } from "./UserStats";

export default function User() {
    const [list, setList] = useState([]);
    useEffect(() => {
        API.getAllUsers().then((users) => setList(users));
    });

    return (
        <div>
            <h2>Lista usuarios</h2>
            {
                list.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))
            }
            <UserQuantity />
            <LastUser />
        </div>
    );
}
