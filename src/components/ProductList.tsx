import SingleProduct from "./SingleProduct"

type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    categoryId: number,
    image: string
}

type Props = {
    products: Product[]
}


function Productlist({ products }: Props) {
    return (
        <ul className="products-container__list">
            {products.map(product =>
                <SingleProduct key={product.id} product={product} />
            )}
        </ul>
    )
}

export default Productlist