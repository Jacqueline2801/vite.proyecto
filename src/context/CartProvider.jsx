import { CartContext } from "./CartContext";
function CartProvider ({ children }) {
    return(
        <CartContext.Provider value={"carrito"}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider