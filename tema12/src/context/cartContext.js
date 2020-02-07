import React, { createContext, useState } from 'react';

const CartContext = createContext([{}, () => { }]);

const CartProvider = ({ children }) => {
    const [item, setItem] = useState(null);

    return (
        <CartContext.Provider value={[item, setItem]}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };