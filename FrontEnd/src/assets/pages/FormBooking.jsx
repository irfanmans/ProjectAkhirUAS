import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";
import axios from "axios";

export default function ListProductDetail() {
    const SetBookOrder = ()=>{
        const getRoomId = document.getElementById("noKamar").value
        const getDateOrder = document.getElementById("tglPesan").value
        const getDuration = document.getElementById("durasi").value

        axios.post("localhost:3000/room",{roomId:getRoomId, checkIn:getDateOrder, duration:getDuration})
        .then(()=>{
            alert("Have been Booked")
        })
        .catch()
    }
    return (
        <>
            <div className="main-product">
                <div className="container-product">
                    <form>
                        <div className="form-group">
                            <label htmlFor="noKamar">Pilih No Kamar</label>
                            <input type="text" id="noKamar" placeholder="Masukkan No Kamar" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tglPesan">Tanggal Pesan</label>
                            <input type="date" id="tglPesan" placeholder="Masukkan Tanggal Pesan" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="durasi">Durasi Pemesanan</label>
                            <input type="text" id="durasi" placeholder="Masukkan Durasi Pemesanan" />
                        </div>
                    </form>
                    <NavLink to="/productdetail">
                        <Button className="btn-tambahPesanan" onClick={SetBookOrder}>Tambah</Button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
