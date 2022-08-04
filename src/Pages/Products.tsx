import { useEffect, useState } from "react"
import Productlist from "../components/ProductList"

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(resp => resp.json())
            .then(productsToDisplay => setProducts(productsToDisplay))
    }, [])

    
    return (
        <section className="products-container main-wrapper">
            <Productlist products={products} />
        </section>
    )
}

export default Products