import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Productlist from "../components/ProductList"

function CategoryProducts() {
    const [products, setProducts] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:4000/products?categoryId=${params.id}`)
        .then (resp => resp.json())
        .then(productsToDisplay => setProducts(productsToDisplay))
    }, [])


    return (
    <Productlist products={products}/>
    )
}

export default CategoryProducts