const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if product already exist in cart
            const exist = state.find(item => item.id === product.id);
            if (exist) {
                // Increase quantity if product already exist in cart
                return state.map((x) => x.id === product.id ? { ...x, quantity: x.quantity + 1 } : x);
            } else {
                // Add product to cart if product not exist in cart
                const product = action.payload;

                return [...state, { ...product, quantity: 1 }];
            }

        case "REMOVEITEM":
            // Remove product from cart
            const exist1= state.find(item => item.id === product.id);
            if (exist1.quantity === 1) {
                return state.filter(item => item.id!== product.id);
            } else {
                return state.map((x) => x.id === product.id? {...x, quantity: x.quantity - 1 } : x);
            }

        default:
            return state;
    }
}

export default handleCart;