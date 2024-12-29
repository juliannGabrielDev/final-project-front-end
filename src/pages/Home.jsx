import Food1 from "../assets/restaurantfood.jpg";
import Button from "../components/Button"

export default function Home() {
    return (
        <>
            <header className="bg-primaryGreen">
                <div className="p-5 grid grid-cols-2 max-w-3xl mx-auto relative">
                    <h1 className="text-primaryYellow text-5xl md:text-6xl leading-9 font-medium font-markazi col-span-2">Little Lemon</h1>
                    <h2 className="font-markazi text-white text-4xl col-span-2 mb-3">Chicago</h2>
                    <p className="text-white font-karla font-medium text-xs md:text-base md:col-span-2 md:w-48 md:mb-5">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <img src={Food1} className="rounded-2xl w-36 h-36 justify-self-end md:absolute md:w-80 md:h-80 md:top-14" alt="Dish" />
                    <Button className="w-32 md:w-36">Reserve a table</Button>
                </div>
            </header>
            <main className="max-w-3xl p-5 mx-auto">
                
            </main>
        </>
    )
}