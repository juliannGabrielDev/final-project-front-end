import { Routes, Route, Link } from "react-router-dom";

import Nav from "./layout/Nav";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        {/* main and header here (<Home />) */}
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App