import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./assets/components/UI/Navbar";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Registrasi from "./assets/pages/Registrasi";
import Footer from "./assets/components/UI/Footer";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registrasi />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
