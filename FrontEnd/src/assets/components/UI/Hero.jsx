import React from "react";
import Button from "../Button/Button";
import { NavLink } from "react-router-dom";

export default function Hero() {
    return (
        <>
            <div className="first-screen">
                <div className="first-screen-caption">
                    <h1>Where your dreams come true!</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit non laborum cum ut facere numquam ducimus praesentium tempore voluptates repellendus nesciunt, minus similique voluptas soluta, corrupti
                        quaerat eaque a?
                    </p>
                    <NavLink to="/addbook">
                        <Button>Lihat Daftar Kamar</Button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
