import { useState, useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../api/api';
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
        <main className="p-5 max-w-3xl mx-auto">
            <H1 variant="text-primaryGreen text-center mb-5">Book a Table</H1>
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
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const initialTime = availableTimes.length > 0 ? availableTimes[0] : '';
        setFormData((prev) => ({
            ...prev,
            time: initialTime,
            occasion: 'Casual'
        }));
    }, [availableTimes]);

    useEffect(() => {
        console.log('Form data:', formData);
        const isValid =
            formData.date &&
            formData.time &&
            formData.guests > 0 &&
            formData.guests <= 10 &&
            formData.occasion;
        setIsFormValid(isValid);
    }, [formData]);

    const navigate = useNavigate();

    function submitForm(e, formData) {
        e.preventDefault();
        if (submitAPI(formData)) {
            navigate('/confirmed-booking');
        }
    }

    function handleChange(e) {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        if (id === 'date') {
            updateTimes(value);
        }
    }

    return (
        <form className="max-w-sm mx-auto" onSubmit={(e) => submitForm(e, formData)}>
            <CustomInput
                id="date"
                type="date"
                label="Choose a date *"
                value={formData.date}
                onChange={handleChange}
                aria-required="true"
                aria-label="Select reservation date"
                required
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
                required
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
                required
                aria-describedby="guests-error"
                variant={`${formData.guests > 0 && formData.guests <= 10 ? "" : "bg-red-200 focus:border-red-900 focus:ring-red-900"}`}
            />
            {formData.guests > 0 && formData.guests <= 10 ? (
                ""
            ) : (
                <p id="guests-error" className="text-xs text-red-900 font-medium mb-3">Please select a number from 1 to 10 to indicate the number of diners. For larger groups, please contact us directly.</p>
            )}

            <label htmlFor="occasion" className="mb-2 font-medium">
                Occasion *
            </label>
            <select
                id="occasion"
                value={formData.occasion}
                onChange={handleChange}
                aria-label="Select the occasion for your reservation"
                aria-required="true"
                required
                className="lock mb-3 w-full bg-highlightWhite outline-none rounded-2xl p-2 border-2 focus:border-primaryGreen focus:ring-primaryGreen"
            >
                <option value="Casual">Casual</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <Button
                type="submit"
                variant={`px-3 py-3 ${isFormValid ? 'bg-primaryYellow cursor-pointer' : 'text-gray-500 bg-gray-300 cursor-not-allowed'}`}
                aria-label="On click Make your reservation"
                disabled={!isFormValid}
            >
                Make your reservation
            </Button>
        </form>
    );
}

BookingForm.propTypes = {
    availableTimes: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateTimes: PropTypes.func.isRequired
};