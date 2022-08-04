import { Link } from "react-router-dom";
import { getRandomColor } from "../helpers";

type Category = {
    id: number,
    name: string
}

type Props = {
    category: Category
}

function CategoryList ({ category }: Props) {
    return (
        <li >
                   {/* @ts-ignore */}
                    <Link style={{ '--random-colour': getRandomColor() }} to={`/categories/${category.id}`}>
                        {category.name}
                    </Link>
                </li>
    )
}

export default CategoryList