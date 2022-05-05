// For Item to add to cart from product page
export const addToCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product,
    };
    };

    // Language: javascript
    // Path: src\redux\action\indux.js
    // For Item to remove from cart from cart page
    export const removeFromCart = (product) => {
        return {
            type: "REMOVEITEM",
            payload: product,
        };
        };