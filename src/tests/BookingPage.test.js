import { render, screen } from '@testing-library/react';
import { BookingPage } from '../pages/BookingPage';

test('Render the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText(/Book a Table/i);

    expect(headingElement).toBeInTheDocument();
});