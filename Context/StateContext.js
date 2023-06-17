import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext()

export const StateContext = ({ children }) => {
    const [ShowCart, setShowCart] = useState(false);
    const [CartItems, setCartItems] = useState([]);
    const [TotalPrice, setTotalPrice] = useState(0);
    const [TotalCost, setTotalCost] = useState(0)
    const [TotalQuantities, setTotalQuantities] = useState(0);
    const [Qty, setQty] = useState(1);
    const [Charges, setCharges] = useState(0);

    useEffect(() => {
        // Fetch cart data from the server-side
        fetch('/api/Cart')
            .then((response) => response.json())
            .then((data) => {
                const { CartItems, Charges, TotalCost, TotalPrice, TotalQuantities } = data;
                setCharges(Charges)
                setCartItems(CartItems);
                setTotalCost(TotalCost)
                setTotalPrice(TotalPrice);
                setTotalQuantities(TotalQuantities);
            })
            .catch((error) => {
                console.error('Failed to fetch cart data', error);
            });
    }, []);

    const UpdateCartData = () => {
        // Save cart data to the server-side
        const CartData = {
            CartItems,
            Charges,
            TotalCost,
            TotalPrice,
            TotalQuantities,
        };

        fetch('/api/Cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(CartData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message);
            })
            .catch((error) => {
                console.error('Failed to save cart data', error);
            });
    };

    useEffect(() => {
        // Update storage whenever the cart items, total price, or total quantities change
        UpdateCartData();
    }, [CartItems, TotalPrice, TotalCost, TotalQuantities, Charges]);

    let FoundProduct;
    let Index;

    const OnAdd = (Product, Quantity) => {
        const CheckProductInCart = CartItems.find((Item) => Item._id === Product._id);

        setTotalPrice((PreviousTotalPrice) => PreviousTotalPrice + Product.Price * Quantity);
        setTotalQuantities((PreviousTotalQuantities) => PreviousTotalQuantities + Quantity);
        setCharges((previousCharges) => previousCharges + Product.Price * Quantity * 0.1);
        setTotalCost((previousTotalCost) => previousTotalCost + Product.Price * Product.Quantity + Product.Price * Product.Quantity * 0.1);

        if (CheckProductInCart) {
            const UpdatedCartItems = CartItems.map((CartProduct) => {
                if (CartProduct._id === Product._id) return {
                    ...CartProduct,
                    Quantity: CartProduct.Quantity + Quantity
                }
            })

            setCartItems(UpdatedCartItems);
        } else {
            Product.Quantity = Quantity;

            setCartItems([...CartItems, { ...Product }]);
        }
        UpdateCartData()
        toast.success(`${Qty} ${Product.Name} added to your cart.`);
    }

    const OnRemove = (Product) => {
        FoundProduct = CartItems.find((Item) => Item._id === Product._id);
        const NewCartItems = CartItems.filter((Item) => Item._id !== Product._id);

        setTotalPrice((PreviousTotalPrice) => PreviousTotalPrice - FoundProduct.Price * FoundProduct.Quantity);
        setCharges((PreviousCharges) => PreviousCharges - FoundProduct.Price * FoundProduct.Quantity * 0.1);
        setTotalQuantities(PreviousTotalQuantities => PreviousTotalQuantities - FoundProduct.Quantity);
        setTotalCost((previousTotalCost) => previousTotalCost - FoundProduct.Price * FoundProduct.Quantity - FoundProduct.Price * FoundProduct.Quantity * 0.1);
        setCartItems(NewCartItems);
        UpdateCartData()
    }

    const ToggleCartItemQuantity = (ID, Value) => {
        FoundProduct = CartItems.find((Item) => Item._id === ID)
        Index = CartItems.findIndex((Product) => Product._id === ID);
        const NewCartItems = CartItems.filter((Item) => Item._id !== ID)

        if (Value === 'increase') {
            setCartItems([...NewCartItems, { ...FoundProduct, Quantity: FoundProduct.Quantity + 1 }]);
            setTotalPrice((PreviousTotalPrice) => PreviousTotalPrice + FoundProduct.Price)
            setCharges((PreviousCharges) => PreviousCharges + FoundProduct.Price * 0.1)
            setTotalQuantities(PreviousTotalQuantities => PreviousTotalQuantities + 1)
            setTotalCost((previousTotalCost) => previousTotalCost + FoundProduct.Price + FoundProduct.Price * 0.1);
        } else if (Value === 'decrease') {
            if (FoundProduct.Quantity > 1) {
                setCartItems([...NewCartItems, { ...FoundProduct, Quantity: FoundProduct.Quantity - 1 }]);
                setTotalPrice((PreviousTotalPrice) => PreviousTotalPrice - FoundProduct.Price)
                setCharges((PreviousCharges) => PreviousCharges - FoundProduct.Price * 0.1)
                setTotalQuantities(PreviousTotalQuantities => PreviousTotalQuantities - 1)
                setTotalCost((previousTotalCost) => previousTotalCost - FoundProduct.Price - FoundProduct.Price * 0.1);
            }
        }
    }

    const IncreaseQuantity = () => {
        setQty((PreviousQuantity) => PreviousQuantity + 1)
        UpdateCartData()
    }

    const DecreaseQuantity = () => {
        setQty((PreviousQuantity) => {
            if (PreviousQuantity - 1 < 1) return 1;
            return PreviousQuantity - 1
        })
        UpdateCartData()
    }

    const ClearCart = () => {
        setCartItems([]);
        setTotalPrice(0);
        setTotalCost(0)
        setTotalQuantities(0);
        setQty(1);
        setCharges(0);
        UpdateCartData();
    }

    return (
        <Context.Provider
            value={{
                ShowCart,
                setShowCart,
                CartItems,
                setCartItems,
                Charges,
                setCharges,
                TotalCost,
                setTotalCost,
                TotalPrice,
                setTotalPrice,
                TotalQuantities,
                setTotalQuantities,
                Qty,
                setQty,
                OnAdd,
                OnRemove,
                ToggleCartItemQuantity,
                IncreaseQuantity,
                DecreaseQuantity,
                ClearCart
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);