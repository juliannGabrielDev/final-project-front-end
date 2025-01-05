import { Routes, Route } from "react-router-dom";

import {Nav, Footer} from './layout';
import {Home, BookingPage, ConfirmedBooking} from './pages';
/*



Important:
Run the following commands

npm install
npm run dev





*/
function App() {
  return (
    <div>
      <Nav />

      <Routes>
        {/* main and header here (<Home />) */}
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App