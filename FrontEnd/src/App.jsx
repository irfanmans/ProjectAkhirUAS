import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
                </Routes>
            </Router>
        </>
    );
}

export default App;
