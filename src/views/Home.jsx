import { Link } from "react-router-dom";
import "../sass/home.scss";
export default function User() {
    return (
        <div className="div-pagina-principal">
            <img src="../../public/Logo.png" alt="logo-fastbar.png" />
            <div>
                <p>
                    Bienvenido a la pagina principal del dashboard de fastbar,
                    aqui encontraras estadisticas y numeros relevante a la
                    aplicacion. Puede seleccionar una de las dos opciones de
                    Data que proveemos.
                </p>
                <Link to="/user">User Data</Link>
                <Link to="/product">Product Data</Link>
            </div>
        </div>
    );
}
