import Button from '../components/Button'

export default function Categories() {
    const variant = 'bg-highlightWhite text-primaryGreen'

    return (
        <div className="max-w-3xl m-auto p-5">
            <h2 className="font-karla font-extrabold mb-2">ORDER FOR DELIVERY!</h2>
            <div className="flex flex-shrink-0 gap-2 overflow-x-auto no-scrollbar"> 
                <Button variant={variant}>Lunch</Button>
                <Button variant={variant}>Mains</Button>
                <Button variant={variant}>Desserts</Button>
                <Button variant={variant}>A la Carte</Button>
                <Button variant={variant}>Specials</Button>
            </div>
        </div>
    )
}