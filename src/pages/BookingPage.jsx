import { useState } from 'react';
import { Button, CustomInput, H1 } from '../components';

export default function BookingPage() {
    return (
        <section className="p-5">
            <H1 variant="text-primaryGreen">Book a Table</H1>
            <BookingForm />
        </section>
    )
}

function BookingForm() {
    const [formData, setFormData] = useState({
        date: '',
        guests: '1',
        time: '',
        occasion: ''
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        })
        console.log({ ...formData, [e.target.id]: e.target.value });
    }

    const [avabibleTime, setAvabibleTime] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ]);

    return (
        <form className="max-w-sm mx-auto">
            <CustomInput
                id="date"
                type="date"
                label="Choose a date"
                value={formData.date}
                onChange={handleChange}
            />
            <CustomInput
                id="guests"
                type="number"
                label="Number of guests"
                placeholder="1"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                max="10"
            />
            <label htmlFor="res-time" className="mb-2 font-medium">Choose time</label>
            <select 
                id="time" 
                value={formData.time}
                onChange={handleChange}
                className="lock mb-3 w-full bg-highlightWhite outline-none rounded-2xl p-2 border-2 focus:border-primaryGreen focus:ring-primaryGreen"
            >
                {avabibleTime.map((time) => (
                    <option key={time} value={time}>{time}</option>
                ))}
            </select>
            <label htmlFor="occasion" className="mb-2 font-medium">Occasion</label>
            <select 
                id="occasion" 
                value={formData.occasion}
                onChange={handleChange}
                className="lock mb-3 w-full bg-highlightWhite outline-none rounded-2xl p-2 border-2 focus:border-primaryGreen focus:ring-primaryGreen">
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <Button variant="bg-primaryYellow px-3 py-3">
                <input type="submit" value="Make your reservation" />
            </Button>
        </form>
    )
}