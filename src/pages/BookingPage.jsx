import CustomInput from '../components/CustomInput';
import H1 from '../components/H1';
import Button from '../components/Button';

export default function BookingPage() {
    return (
        <section className="p-5">
            <H1 variant="text-primaryGreen">Book a Table</H1>
            <BookingForm />
        </section>
    )
}

function BookingForm() {
    return (
        <form className="max-w-sm mx-auto">
            <CustomInput
                id="rest-date"
                type="date"
                label="Choose a date"
            />
            <CustomInput
                id="rest-guests"
                type="number"
                label="Number of guests"
                placeholder="1"
                value="1"
                min="1"
                max="10"
            />
            <label htmlFor="res-time" className="mb-2 font-medium">Choose time</label>
            <select id="res-time" className="lock mb-3 w-full bg-highlightWhite outline-none rounded-2xl p-2 border-2 focus:border-primaryGreen focus:ring-primaryGreen">
                <option value="">17:00</option>
                <option value="">18:00</option>
                <option value="">19:00</option>
                <option value="">20:00</option>
                <option value="">21:00</option>
                <option value="">22:00</option>
            </select>
            <label htmlFor="occasion" className="mb-2 font-medium">Occasion</label>
            <select id="occasion" className="lock mb-3 w-full bg-highlightWhite outline-none rounded-2xl p-2 border-2 focus:border-primaryGreen focus:ring-primaryGreen">
                <option value="">Birthday</option>
                <option value="">Anniversary</option>
            </select>
            
            <Button>
                <input type="submit" value="Make your reservation" />
            </Button>
        </form>
    )
}