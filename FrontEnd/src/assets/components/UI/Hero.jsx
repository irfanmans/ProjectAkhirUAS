import React from "react";
import Button from "../Button/Button";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Hero() {
    const navigate = useNavigate()

    const authenticateToken = () => {
        axios.get("http://localhost:3000/", {
            timeout: 5000,
            withCredentials: true,
        })
        .then(() => { 
            navigate('/addbook'); })
        .catch(() => { 
            navigate('/login') });

    }
    return (
        <>
            <div className="first-screen">
                <div className="first-screen-caption">
                    <h1>Where your dreams come true!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit non laborum cum ut facere numquam ducimus praesentium tempore voluptates repellendus nesciunt, minus similique voluptas soluta, corrupti
                        quaerat eaque a?
                    </p>
                    <Button onClick={authenticateToken}>Pesan Kamar</Button>
                </div>
            </div>
        </>
    );
}
