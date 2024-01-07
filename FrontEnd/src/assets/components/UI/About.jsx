import React from "react";
import Image1 from "../../Image/image2.jpg";
import Button from "../Button/Button";

export default function About() {
    return (
        <>
            <div className="container">
                <div className="wrapper-about">
                    <div className="title-about">
                        <span>About</span>
                        <h2>Tentang Kami</h2>
                    </div>
                    <div className="about">
                        <div className="content">
                            <h1>Mari kunjungi website kami ini dan dapatkan benefit yang luar biasa dengan harga yang terjangkau</h1>
                            <p>
                                Selamat datang di The Heavenly Resort, tempat di mana kemewahan bertemu kenyamanan. Kami bangga menjadi tujuan pilihan bagi para wisatawan yang mencari pengalaman menginap yang istimewa. Dengan lokasi
                                strategis kami yang menawarkan akses mudah ke atraksi terkenal dan fasilitas modern yang dirancang untuk kenyamanan Anda, The Heavenly Resort adalah destinasi unggul untuk menikmati momen tak terlupakan. Staf
                                kami yang ramah dan profesional berkomitmen untuk menyediakan layanan berkualitas tinggi, memastikan bahwa setiap tamu merasa dihargai dan diutamakan. Mari bersama-sama ciptakan kenangan berharga di The
                                Heavenly Resort, di mana setiap detik menjadi pengalaman yang istimewa.
                            </p>
                            <Button className="btn-about">Baca Selengkapnya</Button>
                        </div>
                        <div className="image-about">
                            <img src={Image1} alt="about" />
                        </div>
                    </div>
                </div>
                <div className="wrapper-fasilitas">
                    <div className="title-fasilitas">
                        <span>facility</span>
                        <h2>Fasilitas Kami</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
