import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";

type Category = {
    id: number,
    name: string
}



function Categories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/categories')
        .then (resp => resp.json())
        .then (categoryToDisplay => setCategories(categoryToDisplay))
    }, [])


    return (
        <section className="categories-container main-wrapper">
            <ul className="categories-container__list">
                {categories.map((category: Category) => 
                    <CategoryList key={category.id} category={category}/>
                   
                )}
             
            </ul>
        </section>
    )
}

export default Categories