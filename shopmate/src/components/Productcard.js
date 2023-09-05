import { useCard } from "../context/CardContext";
import "./productcard.css";

export const Productcard = ({product}) =>{
    const { addToCard } = useCard();
    const {name, price, image} = product;
    return(
        <div className="productCard"> 
            <img src={image} alt={name}/>
            <p className="name">{name}</p>
            <div className="action">
                <p>£{price}</p>
                <button onClick={() => addToCard(product)}>Add to Card</button>
            </div>
        </div>
    )
}