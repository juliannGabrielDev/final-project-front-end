import Logo from "../assets/icons/little-lemon-footer.png";

export default function Footer() {
    return (
        <footer className="font-karla border-t-2 border-t-primaryGreen">
            <div className="max-w-3xl grid grid-cols-2 sm:flex sm:flex-wrap gap-9 sm:justify-between mx-auto px-5 py-14">
                <img src={Logo} className="w-24" alt="Little Lemon" />
                <div>
                    <p className="font-bold mb-3">Doormat Navigation</p>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </div>
                <div>
                    <p className="font-bold mb-3">Contact</p>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div>
                    <p  className="font-bold mb-3">Social Media Link</p>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
            <p className="bg-primaryGreen font-medium text-xs p-1 text-white text-center">&copy; 2024 Little Lemon</p>
        </footer>
    )
}