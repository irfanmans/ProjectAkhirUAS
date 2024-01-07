import React from "react";
import kamarTidur from "../../Image/image3.jpg";
import kolamRenang from "../../Image/image4.jpg";
import lapGolf from "../../Image/image5.jpg";
import lobbyUtama from "../../Image/image6.jpg";

export default function CardFasilitas() {
    const dataFasilitas = [
        {
            id: 1,
            nama: "Kamar Tidur",
            imgUrl: kamarTidur,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit non laborum cum ut facere numquam ducimus praesentium tempore voluptates repellendus nesciunt, minus similique voluptas soluta, corrupt",
        },
        {
            id: 2,
            nama: "Kolam Renang",
            imgUrl: kolamRenang,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit non laborum cum ut facere numquam ducimus praesentium tempore voluptates repellendus nesciunt, minus similique voluptas soluta, corrupt",
        },
        {
            id: 3,
            nama: "Lapangan Golf",
            imgUrl: lapGolf,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit non laborum cum ut facere numquam ducimus praesentium tempore voluptates repellendus nesciunt, minus similique voluptas soluta, corrupt",
        },
        {
            id: 4,
            nama: "Lobby Utama",
            imgUrl: lobbyUtama,
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat suscipit non laborum cum ut facere numquam ducimus praesentium tempore voluptates repellendus nesciunt, minus similique voluptas soluta, corrupt",
        },
    ];

    return (
        <>
            <div className="wrapper-cardfasilitas">
                {dataFasilitas.map((item) => (
                    <div className="main-card-fasilitas" key={item.id}>
                        <img src={item.imgUrl} alt={item.nama} />
                        <h1>{item.nama}</h1>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
