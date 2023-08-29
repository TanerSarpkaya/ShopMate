import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/logo.png";
import "./header.css";

export const Header = () => {
    return(
        <header>
            <Link to='/' className="logo">
                <img src={Logo} alt="ShopMate Logo"></img>
                <span>Shopping Card</span>    
            </Link>
        <nav className="navigation">
            <NavLink to="/" className="link" end>Home</NavLink>
            <NavLink to="/card" className="link">Card</NavLink>
        </nav>
        <Link to="/card" className="item">
            <span>Card : 2</span>
        </Link>
        </header>
    )
}