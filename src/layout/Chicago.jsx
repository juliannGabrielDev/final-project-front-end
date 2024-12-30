import LLPhoto from "../assets/restaurant.jpg";
import LLPhoto2 from "../assets/restaurant-chef-B.jpg";

export default function Chicago() {
    return (
        <section className="max-w-3xl mx-auto p-5 grid gap-3 grid-cols-1 md:grid-cols-2">
            <h1 className="text-primaryYellow text-5xl md:text-6xl leading-9 font-medium font-markazi">Little Lemon</h1>
            <h2 className="font-markazi text-4xl mb-3">Chicago</h2>
            <p className="font-karla">Founded in 2015 by brothers Mario and Adrian, <strong>Little Lemon</strong> was born out of a family dream: to bring their grandmother's traditional recipes from a small village in Greece to the big city. When they arrived in Chicago, they noticed that while there were many international restaurants, few captured the true essence of homemade Mediterranean cuisine.</p>
            <div className="flex flex-col gap-3 md:row-span-6 md:row-start-1 md:col-start-2 relative">
                <img className="rounded-2xl md:absolute md:left-4 md:top-4 md:w-4/5" src={LLPhoto} alt="Photo of the restaurant" />
                <img className="rounded-2xl md:absolute md:right-4 md:bottom-4 md:w-4/5" src={LLPhoto2} alt="Photo of the restaurant" />
            </div>
        </section>
    )
}