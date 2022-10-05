import { useState, useEffect } from "react";
import * as API from "../services/user.api";
import { UserQuantity, LastUser } from "../modules/UserStats";
import '../sass/user.scss'

export default function User() {
    const [list, setList] = useState([]);
    useEffect(() => {
        API.getAllUsers().then((users) => setList(users));
    });

    return (
        <div className="user-list">
            <div>
                <h2 className="h2-user-list">Lista usuarios</h2>
                {list.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </div>
            <div>
                <UserQuantity />
                <LastUser />
            </div>
        </div>
    );
}
