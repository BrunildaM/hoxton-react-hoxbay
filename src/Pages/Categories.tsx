import { Link } from "react-router-dom";
import { getRandomColor } from "../helpers";


function Categories() {
    return (
        <section className="categories-container main-wrapper">
            <ul className="categories-container__list">
             
                <li>
                    <Link style={{ '--random-colour': getRandomColor() }} to="/categories/1">
                        electronics
                    </Link>
                </li>

                <li>
                    <Link style={{ '--random-colour': getRandomColor() }} to="/categories/2">
                        jewelery
                    </Link>
                </li>

                <li>
                    <Link style={{ '--random-colour': getRandomColor() }} to="/categories/3">
                        men's clothing
                    </Link>
                </li>

                <li>
                    <Link style={{ '--random-colour': getRandomColor() }} to="/categories/4">
                        women's clothing
                    </Link>
                </li>

            </ul>
        </section>
    )
}

export default Categories