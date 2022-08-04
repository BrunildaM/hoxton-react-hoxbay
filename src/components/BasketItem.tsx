type ItemInBasket = {
    id: number,
    title: string,
    price: number,
    description: string,
    categoryId: number,
    image: string,
    quantity: number
}

type Props = {
    itemInBasket: ItemInBasket
    updatedQuantityOnServEr: (item: ItemInBasket, updatedQuantity: number) => void
}


function BasketItem({ itemInBasket, updatedQuantityOnServEr }: Props) {
    return (
        <li >
            <article className="basket-container__item">
                <img
                    src={itemInBasket.image}
                    alt={itemInBasket.title}
                    width="90"
                />
                <p>{itemInBasket.title}</p>
                <p>
                    Qty:
                    <select
                        defaultValue={itemInBasket.quantity}
                        onChange={e => {
                            updatedQuantityOnServEr(itemInBasket, Number(e.target.value))
                        }}
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                </p>

                <p>Item total: £{(itemInBasket.price * itemInBasket.quantity).toFixed(2)}</p>
            </article>
        </li>
    )
}

export default BasketItem