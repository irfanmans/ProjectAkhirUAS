import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./assets/components/UI/Navbar";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Registrasi from "./assets/pages/Registrasi";
import Footer from "./assets/components/UI/Footer";
import FormBook from "./assets/pages/FormBooking";
import ProductDetail from "./assets/pages/ProductDetail";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Registrasi />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/addbook" element={<FormBook />} />
                    <Route path="/productdetail" element={<ProductDetail />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
