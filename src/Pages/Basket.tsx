import { useEffect, useState } from "react"

type ItemInBasket = {
    id: number,
    title: string,
    price: number,
    description: string,
    categoryId: number,
    image: string,
    quantity: number
}


function getTotalPrice (basket: ItemInBasket[]) {
    let total = 0
    for(const item of basket) {
        total += item.quantity * item.price
    }
    
    return total.toFixed(2)
}

function Basket() {
    const [basket, setBasket] = useState<ItemInBasket[]>([])

    useEffect(() => {
        fetch('http://localhost:4000/basket')
            .then(resp => resp.json())
            .then(basketToDIsplay => setBasket(basketToDIsplay))
    }, [])


    function changeQuantity (item: ItemInBasket, updatedQuantity: number) {
        let basketCopy = JSON.parse(JSON.stringify(basket))

        if(updatedQuantity > 0 ){
            let match = basketCopy.find((target: ItemInBasket) => target.id === item.id)
        match.quantity = updatedQuantity
        } else {
            basketCopy= basketCopy.filter((target: ItemInBasket)  => target.id !== item.id)

        }
        setBasket(basketCopy)
    }


    function updatedQuantityOnServEr (item: ItemInBasket, updatedQuantity: number){
        fetch(`http://localhost:4000/basket/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ quantity:  updatedQuantity})
        })
            .then(resp => resp.json())
            .then(() => {
                changeQuantity(item, updatedQuantity)
            })


    }

  
    


    return (
        <section className="basket-container">
            <h2>Your Basket</h2>
            <ul>
                {basket.map(itemInBasket =>
                    <li key={itemInBasket.id}>
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
                    )}
            </ul>
         
            <h3>Your total: £{getTotalPrice(basket)}</h3>
        </section>
    )
}

export default Basket

