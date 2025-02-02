import Food1 from '../assets/restaurantfood.jpg';

import { Button, H1 } from '../components';
import {Categories, Chicago, CustomersSay, Specials} from '../layout';

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <>
            <header className="bg-primaryGreen">
                <div className="p-5 grid grid-cols-2 max-w-3xl mx-auto relative">
                    <H1 variant="text-primaryYellow col-span-2">Little Lemon</H1>
                    <h2 className="font-markazi text-white text-4xl col-span-2 mb-3">Chicago</h2>
                    <p className="text-white font-karla font-medium text-xs md:text-base md:col-span-2 md:w-48 md:mb-5">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <img 
                        src={Food1} 
                        className="rounded-2xl object-cover w-36 h-36 justify-self-end md:absolute md:w-80 md:h-80 md:top-14" 
                        alt="Dish" 
                    />
                    <Link to="/booking">
                        <Button variant="bg-primaryYellow w-32 md:w-36">
                            Reserve a table
                        </Button>
                    </Link>

                </div>
            </header>
            <Categories />
            <main>
                <Specials />
                <CustomersSay />
                <Chicago />
            </main>
        </>
    )
}