import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

type Product ={
    id: number,
      title: string,
      price: number,
      description: string,
      categoryId: number,
      image: string
  }

function ProductDetails() {
    const params = useParams()
    const [product, SetProduct] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:4000/products/${params.id}`)
        .then(resp => resp.json())
        .then(productToDisplay => SetProduct(productToDisplay))
    }, [])


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
                {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
                <button>Add to basket</button>
            </div>
        </section>
    )
}

export default ProductDetails