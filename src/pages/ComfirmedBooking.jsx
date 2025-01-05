import { useNavigate } from 'react-router-dom';
import { H1, Button } from '../components';

export default function ConfirmedBooking() {
  const navigate = useNavigate();
  return (
    <main className="bg-primaryGreen h-[80vh] flex flex-col items-center justify-center">
      <H1 variant="text-primaryYellow text-center p-4">Reservation confirmed</H1>
      <Button onClick={() => {navigate("/")}} variant="bg-primaryYellow">Back to home</Button>
    </main>
  );
}