import React from "react";
import Image1 from "../components/Image/image3.jpg"
import Image2 from "../components/Image/image4.jpg"
import Image3 from "../components/Image/image5.jpg"

export default function Home(){
    return(
        <React.Fragment>
            <div className="first-screen">
                <div className="first-screen-caption">
                    Where your dreams come true! <br/>
                    <button>Book Now</button>
                </div>
            </div>
            <div className="second-screen">
                <div className="about">
                    <div className="about-caption">
                        Welcome to your luxurious home away from home!
                        <p className="about-caption-contain">
                            Write a paragraph that talks about your brand or property here. Convince your prospective clients to choose you and your offerings by highlighting the qualities that set you apart from the competition. Your audience is already on your website, so push a little bit harder to seal the deal!
                        </p>
                    </div>
                    <div className="about-image"></div>
                </div>
                
                <div className="facility">
                    <div className="facility-title">Facilities</div>
                    <div className="facility-image">
                        <img src={Image1} alt="steak" />
                        <img src={Image2} alt="spa" />
                        <img src={Image3} alt="swimming-pool" />
                    </div>
                    <div className="facility-caption">
                        List your offers, promos, or special membership privileges and perks here to entice people to book your property. Showcase the best your property has to offer by highlighting one of your accommodations. Add a flattering photo, then describe the room best feature.
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}