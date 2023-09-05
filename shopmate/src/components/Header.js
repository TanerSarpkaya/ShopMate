import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/logo.png";
import "./header.css";
import { useCard } from '../context/CardContext';

export const Header = () => {
    const { cartList } = useCard();
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
            <span>Card : {cartList.lenght}</span>
        </Link>
        </header>
    )
}