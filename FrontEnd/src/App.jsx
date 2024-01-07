import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./assets/components/UI/Navbar";
import Login from "./assets/pages/Login";
import Registrasi from "./assets/pages/Registrasi";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registrasi />} />
                    <Route path="/" element={<Navigate to="/register" />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
