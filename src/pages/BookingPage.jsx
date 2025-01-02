export default function BookingPage() {
    return (
        <section className="p-5">
            <h1>Book a Table</h1>
            <BookingForm />
        </section>
    )
}

function BookingForm() {
    return (
        <form>
            <label htmlFor="res-date">Choose a date</label>
            <input type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time">
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" id="guests" placeholder="1" min="1" max="10" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion">
                <option value="">Birthday</option>
                <option value="">Anniversary</option>
            </select>
            <input type="submit" value="Make your reservation" />
        </form>
    )
}