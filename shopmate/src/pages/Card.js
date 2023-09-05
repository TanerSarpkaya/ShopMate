import { Cardcard } from "../components";
import { useTitle } from "../hooks/useTitle";
import { useCard } from "../context/CardContext";



export const Card = () => {
    const { total, cartList } = useCard();
    useTitle("Cart");

    return (
        <main>
            <section className="cart">
                <h1>Card Items: {cartList.length} / ${total}</h1>
                {cartList.map((product) => (
                    <Cardcard key={product.id} product={product} />
                ))}
            </section>
        </main>
    )
}