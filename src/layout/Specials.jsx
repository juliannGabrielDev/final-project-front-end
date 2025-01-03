import PropTypes from "prop-types";

import GreekSalad from "../assets/greek-salad.jpg";
import LemonDessert from "../assets/lemon-dessert.jpg";
import Bruchetta from "../assets/bruchetta.svg";

export default function Specials() {
    return (
        <section className="flex flex-col gap-5 p-5 max-w-3xl mx-auto md:grid md:grid-cols-3">
            <h2 className="font-bold text-4xl font-markazi col-span-3">This Weeks Specials!</h2>
            <DishCard
                name="Greek Salad"
                description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
                price="$12.99"
                image={GreekSalad}
            />
            <DishCard
                name="Bruchetta"
                description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                price="$5.99"
                image={Bruchetta}
            />
            <DishCard
                name="Lemon Dessert"
                description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                price="$5.00"
                image={LemonDessert}
            />
        </section>
    )
}

function DishCard({ name, description, price, image }) {
    return (
        <article className="grid grid-cols-2 grid-rows-auto gap-y-2 border-t-2 md:bg-highlightWhite md:border-2 md:p-3">
            <h3 className="font-medium col-span-2">{name}</h3>
            <p className="text-primaryGreen text-sm md:col-span-2">{description}</p>
            <span className="font-medium text-secondaryCoral">{price}</span>
            <img src={image} className="w-24 object-cover h-24 rounded-2xl row-start-2 col-start-2 justify-self-end md:row-start-1 md:col-start-1 md:col-span-2 md:w-full" alt="Dish" />
        </article>
    )
}

DishCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}
