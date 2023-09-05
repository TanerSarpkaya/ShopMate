import { useCard } from "../context/CardContext";
import "./cardcard.css";

export const Cardcard = ({product}) =>{
    const { removeFromCard } = useCard();
    const {name, price, image} = product;
    
    return(
        <div className="cartCard">
            <img src={image} alt={name} />
            <p className="productName">{name}</p>
            <p className="productName">£{price}</p>
            <button onClick={() => removeFromCard(product) }>Remove</button>
        </div>
        
    )
}