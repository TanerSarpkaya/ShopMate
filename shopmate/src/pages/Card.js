import { Cardcard } from "../components";
import { useTitle } from "../hooks/useTitle";




export const Card = () =>{
    useTitle("Cart");
    const products = [
        {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png"},
        {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/images/1002.png"},
        {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/images/1003.png"}
    ]
    return(
        <main>
            <section className="cart">
                <h1>Card Items: {products.lenght}</h1>
                { products.map((product) => (
                <Cardcard  key={product.id} product={product} />
                ))}
            </section>
        </main>
    )
}