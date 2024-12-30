export default function CustomersSay() {
    const opinions = [
        {
            rating: 5,
            profile: "https://randomuser.me/api/portraits/women/44.jpg",
            name: "Maria Gonzalez",
            comment: "The food was delicious and the service was excellent. I will definitely come back!"
        },
        {
            rating: 4,
            profile: "https://randomuser.me/api/portraits/men/32.jpg",
            name: "Carlos Lopez",
            comment: "Great atmosphere and tasty dishes, but the wait time was a bit long."
        },
        {
            rating: 5,
            profile: "https://randomuser.me/api/portraits/men/45.jpg",
            name: "Juan Perez",
            comment: "Excellent experience. I loved the authentic taste of Mediterranean cuisine."
        },
        {
            rating: 3,
            profile: "https://randomuser.me/api/portraits/women/50.jpg",
            name: "Ana Ramirez",
            comment: "The food was okay, but I expected more for the price."
        }
    ];    

    return (
        <section className="bg-primaryGreen">
            <div className="flex flex-col gap-8 max-w-3xl mx-auto px-5 py-28">
                <h2 className="text-white text-center text-3xl font-bold font-markazi">Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-5">
                    {opinions.map((opinion, index) => (
                        <OpinionCard
                            key={index}
                            rating={opinion.rating}
                            profile={opinion.profile}
                            name={opinion.name}
                            comment={opinion.comment}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function OpinionCard(props) {
    return (
        <article className="bg-highlightWhite p-3 grid grid-cols-2 gap-3 font-karla border-2">
            <div className="col-span-2" arial-label={`${props.rating} stars rating`}>⭐ {props.rating}</div>
            <img src={props.profile} className="w-20 rounded-2xl" alt={`Profile picture of ${props.name}`} />
            <h3 className="font-medium">{props.name}</h3>
            <p className="col-span-2 text-xs">{props.comment}</p>
        </article>
    )
}