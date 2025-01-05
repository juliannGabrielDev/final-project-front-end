import { render, screen, fireEvent, describe, test, expect } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from '../pages/BookingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import jest from 'jest-mock';

describe('BookingForm', () => {
    const mockUpdateTimes = jest.fn();
    const mockNavigate = jest.fn();

    const renderComponent = (availableTimes = []) => {
        render(
            <Router>
                <BookingForm
                    availableTimes={availableTimes}
                    updateTimes={mockUpdateTimes}
                    navigate={mockNavigate}
                />
            </Router>
        );
    };

    test('renders form elements correctly', () => {
        renderComponent();

        expect(screen.getByLabelText(/Choose a date \*/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Choose time \*/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Number of guests \*/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Occasion \*/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Make your reservation/i })).toBeInTheDocument();
    });

    test('updates form data on input change', () => {
        renderComponent();

        fireEvent.change(screen.getByLabelText(/Choose a date \*/i), { target: { value: '2023-10-10' } });
        fireEvent.change(screen.getByLabelText(/Number of guests \*/i), { target: { value: '5' } });
        fireEvent.change(screen.getByLabelText(/Occasion \*/i), { target: { value: 'Birthday' } });

        expect(screen.getByLabelText(/Choose a date \*/i)).toHaveValue('2023-10-10');
        expect(screen.getByLabelText(/Number of guests \*/i)).toHaveValue(5);
        expect(screen.getByLabelText(/Occasion \*/i)).toHaveValue('Birthday');
    });

    test('calls updateTimes when date changes', () => {
        renderComponent();

        fireEvent.change(screen.getByLabelText(/Choose a date \*/i), { target: { value: '2023-10-10' } });

        expect(mockUpdateTimes).toHaveBeenCalledWith('2023-10-10');
    });

    test('disables submit button when form is invalid', () => {
        renderComponent();

        expect(screen.getByRole('button', { name: /Make your reservation/i })).toBeDisabled();
    });

    test('enables submit button when form is valid', () => {
        renderComponent(['12:00', '13:00']);

        fireEvent.change(screen.getByLabelText(/Choose a date \*/i), { target: { value: '2023-10-10' } });
        fireEvent.change(screen.getByLabelText(/Number of guests \*/i), { target: { value: '5' } });
        fireEvent.change(screen.getByLabelText(/Choose time \*/i), { target: { value: '12:00' } });

        expect(screen.getByRole('button', { name: /Make your reservation/i })).toBeEnabled();
    });

    test('navigates to confirmed booking on successful form submission', () => {
        renderComponent(['12:00', '13:00']);

        fireEvent.change(screen.getByLabelText(/Choose a date \*/i), { target: { value: '2023-10-10' } });
        fireEvent.change(screen.getByLabelText(/Number of guests \*/i), { target: { value: '5' } });
        fireEvent.change(screen.getByLabelText(/Choose time \*/i), { target: { value: '12:00' } });

        fireEvent.submit(screen.getByRole('button', { name: /Make your reservation/i }));

        expect(mockNavigate).toHaveBeenCalledWith('/confirmed-booking');
    });
});