import Button from "../components/Button"

export default function Categories() {
    return (
        <div className="max-w-3xl m-auto p-5">
            <h2 className="font-karla font-extrabold mb-2">ORDER FOR DELIVERY!</h2>
            <div className="flex flex-shrink-0 gap-2">
                <Button bg="bg-highlightWhite" textColor="primaryGreen">Lunch</Button>
                <Button bg="bg-highlightWhite" textColor="primaryGreen">Mains</Button>
                <Button bg="bg-highlightWhite" textColor="primaryGreen">Desserts</Button>
                <Button bg="bg-highlightWhite" textColor="primaryGreen">A la Carte</Button>
                <Button bg="bg-highlightWhite" textColor="primaryGreen">Specials</Button>
            </div>
        </div>
    )
}