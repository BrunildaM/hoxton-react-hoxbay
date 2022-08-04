import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    categoryId: number,
    image: string
}



function ProductDetails() {
    {/* @ts-ignore */ }
    const [product, SetProduct] = useState<Product>({})
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:4000/products/${params.id}`)
            .then(resp => resp.json())
            .then(productToDisplay => SetProduct(productToDisplay))
    }, [])


    function addProductToBasket() {
        fetch('http://localhost:4000/basket', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...product, quantity: 1 })
        })
            .then(resp => resp.json())
            .then(() => {
                navigate('/basket')
            })

    }



    if ((product) === null) return <p>Select one product</p>

    return (
        <section className="product-detail main-wrapper">
            <img
                src={product.image}
                alt={product.title}
            />
            <div className="product-detail__side" style={{ borderColor: 'var(--yellow)' }}>
                <h3></h3>
                <h2>{product.title}</h2>
                <p>
                    {product.description}
                </p>
                <p>£{product.price}</p>

                <button onClick={() => addProductToBasket()}>Add to basket</button>
            </div>
        </section>
    )
}

export default ProductDetails