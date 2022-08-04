import { useEffect, useState } from "react"
import SingleProduct from "../components/SingleProduct"

function Products() {
 const[products, setProducts] = useState([])

 useEffect(() => {
     fetch('http://localhost:4000/products')
     .then (resp => resp.json())
     .then(productsToDisplay => setProducts(productsToDisplay))
 }, [])
    return (
        <section className="products-container main-wrapper">
    <ul className="products-container__list">
     {products.map(product => 
         <SingleProduct product={product}/>
         )}
    </ul>
  </section>
    )
}

export default Products