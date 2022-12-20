import {useReducer} from 'react'

import CartContext from './cart-context'
const defaultCartState = {
        items: [],
        totalAmount: 0
    }

    const cartReducer = (state,action) =>{

        if(action.type === 'ADD'){
            const updateTotalAmount = 
            state.totalAmount+ action.item.price*action.item.totalAmount
            
            const existingCartItemIndex = 
            state.items.findIndex(item => item.productId === action.item.proudctId)

            const existingCartItem = state.items[existingCartItemIndex]
            let updatedItems
            if(existingCartItem){
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount+action.item.amount
                }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            }else{
                updatedItems = state.items.concat(action.item)
            }

            return {
                items: updatedItems,
                totalAmount: updateTotalAmount
            }
        }
return defaultCartState
    }

    const CartProvider = (props) => {
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState)
    const addItemToCartHandler = (item) =>{
        dispatchCartAction({type:'ADD',item})
    }

    const cartContext ={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem: addItemToCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider