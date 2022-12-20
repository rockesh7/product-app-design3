import ProductItemForm from "../../cart/ProductItemForm"
import StarRating from "../../rating/StarRating"
import {useContext} from 'react'
import CartContext from "../../../store/cart-context"
const ProductItem = (props) => {

    const cartCtx = useContext(CartContext)
const addToCartHandler = (amount) =>{
    cartCtx.addItem({
        productId: props.product.productId,
        productName: props.product.productName,
        price: props.product.price,
        amount: amount
    })
}
    return (
        <tr>
            <td>
                {props.show ? 
               <img src={props.product.imageUrl} 
               title = {props.product.productName} 
               className='avatar' style={{width:50,margin:2}}/>
            : null} 
            </td>
            <td>{props.product.productName}</td>
            <td>{props.product.productCode}</td>
            <td>{props.product.releaseDate}</td>
            <td>{props.product.price}</td>
            {/* <td>{props.product.starRating}</td> */
            <td><StarRating rating={props.product.starRating}/></td>
            }
            <td>
                <ProductItemForm onAddToCart={addToCartHandler}/>
            </td>
        </tr>
    )
}

export default ProductItem