// useEffect(()=> {},[dependencies])
// useReducer => State management library


import  {useState,useEffect} from 'react'
import ProductItem from "./productItem/ProductItem"
import 'bootstrap/dist/css/bootstrap.min.css'
import httpclient from  '../../apiclient/httpclient'
const AvailableProducts = () =>{
   const [products,setProducts] = useState([])
   const [filterProducts,setFilterByProducts] = useState([])
   const [show, setShow] = useState(false)
   useEffect(() =>{
      console.log('EFFECT RUNNING')
   },[filterProducts])
   useEffect(()=>{
   const fetchProducts = async () =>{
        const response = await httpclient.get('http://localhost:4200/products')
        setProducts(response)
        setFilterByProducts(response)
      }
      fetchProducts()
   },[])

   const toggle = () =>{
    setShow(!show)
   }

   const searchByProductName = (e) =>{
     const searchKey = e.target.value
     setFilterByProducts(products.filter(p => 
        p.productName.indexOf(searchKey)!== -1))
   }
  

  const productsListComp = filterProducts.map(product => (
    <ProductItem key={product.productId} product={product} show={show}/>
   ))


   return (
    <div className="panel-group">
<div className='panel panel-primary'>
<div className="panel panel-header">
 Products List
</div>


<div className='panel-body'>
<div className='row'>
<div className='col-md-2'>Filter by:</div>
<div className='col-md-4'>
<input type='text' onChange={searchByProductName}/>

</div>
</div>
<div className='row'>
<div className='col-md-6'>

</div>
</div>
<div className='table-responsive'>
<table className='table'>
<thead>
<tr>
<th>
<button className='btn btn-primary' onClick={toggle}>
{show ? 'Hide ': 'Show '} Image
</button>
</th>
<th>Product</th>
<th>Code</th>
<th>Available</th>
<th>Price</th>
<th>5 Star Rating</th>
</tr>
</thead>
<tbody>
{productsListComp}

</tbody>

</table>
</div>
</div>
</div>
</div>
   )



}
export default AvailableProducts