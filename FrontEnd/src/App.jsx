import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/UI/Navbar";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Registrasi from "./assets/pages/Registrasi";
import Footer from "./assets/components/UI/Footer";
import FormBook from "./assets/pages/FormBooking";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Registrasi />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/addbook" element={<FormBook />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
