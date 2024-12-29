import PropTypes from "prop-types";

export default function Specials() {
    return (
        <section>
            <h2 className="font-bold text-4xl font-markazi">This Weeks Specials!</h2>
            <DishCard
            name="Greek Salad"
            description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            price="$12.99"
            image=""
            />
        </section>
    )
}

function DishCard(props) {
    return (
        <article>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <span>{props.price}</span>
            <img src={props.image} alt="Dish" />
        </article>
    )
}

DishCard.PropTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
 }
