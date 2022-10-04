import User from "./views/User";
import Product from "./views/Product";
import Error from "./views/Error";
import Home from "./views/Home";
import { Routes, Route, Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <Link to="/">
                <h1>Fast-Bar Dashboard</h1>
            </Link>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/user" element={<User />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
        </div>
    );
}

export default Dashboard;
