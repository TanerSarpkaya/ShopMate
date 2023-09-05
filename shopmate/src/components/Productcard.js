import { useEffect, useState } from "react";
import { useCard } from "../context/CardContext";
import "./productcard.css";

export const Productcard = ({product}) =>{
    const { cartList, addToCard, removeFromCard } = useCard();
    const [isInCart,setIsInCart] = useState(false);
    const {id,name, price, image} = product;
    useEffect(() => {
        const productIsInCart = cartList.find(cartItem => cartItem.id === id);
        if(productIsInCart){
            setIsInCart(true);
        } else {
            setIsInCart(false);        }
    },[cartList,id])
    return(
        <div className="productCard"> 
            <img src={image} alt={name}/>
            <p className="name">{name}</p>
            <div className="action">
                <p>£{price}</p>
                { isInCart ? (<button className="remove" onClick={() => removeFromCard(product)}>Remove</button>) : (<button onClick={() => addToCard(product)}>Add to Card</button>)}
                
            </div>
        </div>
    )
}