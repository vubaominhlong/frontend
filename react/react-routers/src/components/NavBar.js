import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./auth";

function NavBar(props) {
    const nvLinkStyle = (props) => {
        return {
            fontWeight: props.isActive ? "bold" : "normal",
            textDecoration: props.isActive ? "none": "underline"
        }
    }
    const auth = useAuth();

    return (
        <nav className="primary-nav">
            <NavLink style={nvLinkStyle} to={"/"}>Home</NavLink>
            <NavLink style={nvLinkStyle} to={"/about"}>About</NavLink>
            <NavLink style={nvLinkStyle} to={"/contact"}>Contact</NavLink>
            <NavLink style={nvLinkStyle} to={"/product"}>Products</NavLink>
            <NavLink style={nvLinkStyle} to={"/users"}>Users</NavLink>
            <NavLink style={nvLinkStyle} to={"/profile"}>Profile</NavLink>
            {
                !auth.user && (
                    <NavLink style={nvLinkStyle} to={"/login"}>Login</NavLink>
                )
            }
        </nav>
    );
}

export default NavBar;