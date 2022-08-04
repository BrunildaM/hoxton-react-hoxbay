import { useParams } from "react-router-dom"

function ProductDetails() {
    const params = useParams()

    return (
        <section className="product-detail main-wrapper">
            <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            />
            <div className="product-detail__side" style={{ borderColor: 'var(--yellow)' }}>
                <h3></h3>
                <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
                <p>
                    Your perfect pack for everyday use and walks in the forest. Stash your
                    laptop (up to 15 inches) in the padded sleeve, your everyday
                </p>
                <p>£109.95</p>
                {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
                <button>Add to basket</button>
            </div>
        </section>
    )
}

export default ProductDetails