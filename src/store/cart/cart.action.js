import {createAction} from "../../utils/reducer/reducer.utils";
import {CART_ACTION_TYPE} from "./cart.types";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        )
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    if (existingCartItem.quantity === 1) {
        return cartItems.filter((cartItem) =>
            cartItem.id !== cartItemToRemove.id
        )
    }

    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    )
}

const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) =>
        cartItem.id !== cartItemToClear.id
    )
}

export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean)

export const setCartItems = (cartItem) => createAction(CART_ACTION_TYPE.SET_CART_ITEMS, cartItem)

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems)
}