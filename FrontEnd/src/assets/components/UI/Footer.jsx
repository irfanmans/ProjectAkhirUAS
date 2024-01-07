import React from "react";
import { FaInstagram, FaYoutube, FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="wrapper-footer">
                <div className="container">
                    <div className="main-about">
                        <h1>About</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga illo, ut incidunt ea nam sint soluta possimus vel unde cupiditate tempore adipisci, quibusdam velit nostrum delectus quaerat magni commodi molestias.
                        </p>
                    </div>
                    <div className="main-contact">
                        <h1>Contact</h1>
                        <ul>
                            <li>heavenlyresort@gmail.com</li>
                            <li>Medan, Sumatera Utara</li>
                            <li>+62 8136 8787 543</li>
                        </ul>
                    </div>
                    <div className="main-partners">
                        <h1>Partners</h1>
                        <ul>
                            <li>Elroy Saputra</li>
                            <li>Veilind</li>
                            <li>Irfan</li>
                            <li>Louis</li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <h1>Sosial Media</h1>
                        <ul>
                            <li>
                                <NavLink>
                                    <FaInstagram />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <FaYoutube />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <FaTwitter />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink>
                                    <FaTelegramPlane />
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <span>&copy; PROJECT AKHIR UAS | JANUARI 2024</span>
                </div>
            </footer>
        </>
    );
}
