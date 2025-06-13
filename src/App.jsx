
import './App.css'

import {products} from './db/products';
import { useReducer } from 'react';
import { filterReducer } from './reducers/filterReducer';

function App() {
  const initialState={
    price:'',
    discount:'',
    rating:'',
  }
  const [filters,filterDispatch] = useReducer(filterReducer, initialState);

  const handlePricechange=(e)=>{
    filterDispatch({
      type:"PRICE",
      payload:e.target.value,
    })
  }

  const handleDiscountchange=(e)=>{
    filterDispatch({
      type:"DISCOUNT",
      payload:e.target.value,
    })
  } 

  const handleRatingchange=(e)=>{
    filterDispatch({
      type:"RATING",
      payload:e.target.value,
    })
  }
  const filteredProducts=filters.price>0? products.filter(product=>product.newPrice<=filters.price):products;
  const filterByDiscount=filters.discount>0? filteredProducts.filter(product=>product.discount>=filters.discount):filteredProducts;
  const filteredByRating=filters.rating>0? filterByDiscount.filter(product=>product.rating>=filters.rating):filterByDiscount;

  return (
    <div className="App">
      <h1 className='head'>Products</h1>
      <div className='filter'>
        <span>Filters</span>
        <input onChange={handlePricechange} placeholder='set price limit' />
        <input onChange={handleDiscountchange} placeholder='set discount' />
        <input onChange={handleRatingchange} placeholder='set rating' />
      </div>
     <div className=' container'>
      {
        filteredByRating.length>0 && filteredByRating.map(product=>(
          <div className='product'>
            <div>
              <h3>{product.name}</h3>
            </div>
            <div>
              <p>Price: {product.newPrice}</p>
              <p>Rating: {product.rating}</p>
              <p>Discount: {product.discount}</p>
            </div>
            </div>
        ))
      }
     </div>
    </div>
  )
}

export default App;
