import { Link } from "react-router-dom";

type Product ={
  id: number,
    title: string,
    price: number,
    description: string,
    categoryId: number,
    image: string
}

type Props = {
  product: Product
}

function SingleProduct ( { product }: Props) {
    return (
        <li>
        <Link to={`/products/${product.id}`}>
            <article className="product-item">
            <img
              src={product.image}
              alt={product.title}
            />
            <h3>{product.title}</h3>
          </article>
          </Link >
      </li>
    )

}

export default SingleProduct