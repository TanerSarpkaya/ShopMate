import "./productcard.css";

export const Productcard = ({product}) =>{
    const {name, price, image} = product;
    return(
        <div className="productCard"> 
            <img src={image} alt={name}/>
            <p className="name">{name}</p>
            <diV className="action">
                <p>£{price}</p>
                <button>Add to Card</button>
            </diV>
        </div>
    )
}