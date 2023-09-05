import { createContext, useReducer } from "react";
import { useContext } from "react";
import { cartReducer } from "../reducer/cardReducer";



const initialState = {
    cartList: [],
    total: 0,

}

const CardContext = createContext(initialState);

export const CardProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);


    const addToCard = (product) => {
        const updatedCardList = state.cartList.concat(product);
        updateTotal(updatedCardList);

        dispatch({
            type: "ADD_TO_CARD",
            payload: {
                products: updatedCardList
            }
        })
    }
    const removeFromCard = (product) => {
        const updatedCardList = state.cartList.filter(current => current.id !== product.id);
        updateTotal(updatedCardList);

        dispatch({
            type: "REMOVE_FROM_CARD",
            payload: {
                products: updatedCardList
            }
        })

    }
    const updateTotal = (products) => {
        let total = 0;
        products.forEach(product => total = total + product.price);

        dispatch({
            type: "UPDATE_TOTAL",
            payload: {
                total
            }
        })
    }
    const value = {
        total: state.total,
        cartList: state.cartList,
        addToCard,
        removeFromCard
    };
    return (
        <CardContext.Provider value={value}>
            {children}
        </CardContext.Provider>

    )
}

export const useCard = () => {
    const context = useContext(CardContext);
    return context;
}