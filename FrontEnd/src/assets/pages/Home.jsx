import React from "react";
// import Image2 from "../Image/image3.jpg";
// import Image3 from "../Image/image4.jpg";
// import Image4 from "../Image/image5.jpg";
import About from "../components/UI/About";
import Hero from "../components/UI/Hero";
import Fasilitas from "../components/UI/Fasilitas";

export default function Home() {
    return (
        <React.Fragment>
            <article>
                <Hero />
            </article>
            <article>
                <About />
            </article>
            <article>
                <Fasilitas />
            </article>
        </React.Fragment>
    );
}
