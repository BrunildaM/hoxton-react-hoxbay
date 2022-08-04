import { useEffect, useState } from "react"
import BasketItem from "../components/BasketItem"

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

    //Things that need to be fixed 
// when quantity = 0 the product still shows on the page 
// if you click Add to Baset again for a product that is on the basket the quantity should be increased
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
                    
                   <BasketItem key={itemInBasket.id} itemInBasket={itemInBasket} updatedQuantityOnServEr={updatedQuantityOnServEr} /> )}
            </ul>
         
            <h3>Your total: £{getTotalPrice(basket)}</h3>
        </section>
    )
}

export default Basket

