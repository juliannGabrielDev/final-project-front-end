import { useState, useReducer, useEffect } from 'react';
import { fetchAPI } from '../api/api';
import PropTypes from 'prop-types';
import { Button, CustomInput, H1 } from '../components';

async function safeFetchAPI(date) {
    try {
        const times = await fetchAPI(date);
        return times || [];
    } catch (error) {
        console.error("Error fetching times:", error);
        return [];
    }
}

function timesReducer(state, action) {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return action.payload;
        default:
            return state;
    }
}

export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(timesReducer, []);

    useEffect(() => {
        async function fetchInitialTimes() {
            const today = new Date().toISOString().split('T')[0];
            console.log('Fetching initial times for:', today);
            const times = await safeFetchAPI(today);
            console.log('Fetched times:', times);
            dispatch({ type: 'UPDATE_TIMES', payload: times });
        }
        fetchInitialTimes();
    }, []);

    async function updateTimes(selectedDate) {
        console.log('Updating times for date:', selectedDate);
        const times = await safeFetchAPI(selectedDate);
        console.log('Updated times:', times);
        dispatch({ type: 'UPDATE_TIMES', payload: times });
    }

    return (
        <main className="p-5">
            <H1 variant="text-primaryGreen">Book a Table</H1>
            <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
        </main>
    );
}

function BookingForm({ availableTimes, updateTimes }) {
    const [formData, setFormData] = useState({
        date: '',
        guests: '1',
        time: '',
        occasion: ''
    });

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        if (id === 'date') {
            updateTimes(value);
        }
    }

    return (
        <form className="max-w-sm mx-auto">
            <CustomInput
                id="date"
                type="date"
                label="Choose a date *"
                value={formData.date}
                onChange={handleChange}
                aria-required="true"
                aria-label="Select reservation date"
            />
            <label htmlFor="res-time" className="mb-2 font-medium">
                Choose time *
            </label>
            <select
                id="time"
                value={formData.time}
                onChange={handleChange}
                aria-label="Select the time for your reservation"
                aria-required="true"
                className="block mb-3 w-full bg-highlightWhite outline-none rounded-2xl p-2 border-2 focus:border-primaryGreen focus:ring-primaryGreen"
            >
                {availableTimes.length > 0 ? (
                    availableTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))
                ) : (
                    <option>No available times</option>
                )}
            </select>
            <CustomInput
                id="guests"
                type="number"
                label="Number of guests *"
                placeholder="1"
                value={formData.guests}
                onChange={handleChange}
                min="1"
                max="10"
                aria-required="true"
                aria-label="Select the number of guests for your reservation"
                aria-invalid={formData.guests <= 0 ? "true" : "false"}
            />
            <label htmlFor="occasion" className="mb-2 font-medium">
                Occasion *
            </label>
            <select
                id="occasion"
                value={formData.occasion}
                onChange={handleChange}
                aria-label="Select the occasion for your reservation"
                aria-required="true"
                className="lock mb-3 w-full bg-highlightWhite outline-none rounded-2xl p-2 border-2 focus:border-primaryGreen focus:ring-primaryGreen"
            >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <Button variant="bg-primaryYellow px-3 py-3" aria-label="Make your reservation">
                <input type="submit" value="Make your reservation" aria-hidden="true" />
            </Button>
        </form>
    );
}

BookingForm.propTypes = {
    availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTimes: PropTypes.func.isRequired
};