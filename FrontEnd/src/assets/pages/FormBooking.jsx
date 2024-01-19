import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import axios from "axios";

export default function ListProductDetail() {
  const navigate = useNavigate();

  const SetBookOrder = () => {
    const getRoomId = document.getElementById("noKamar").value;
    const getDateOrder = document.getElementById("tglPesan").value;
    const getDuration = document.getElementById("durasi").value;
    const token = localStorage.getItem("access_token");
    axios
      .post(
        "https://project-akhir-uas-nine.vercel.app/room",
        {
          roomId: getRoomId,
          checkIn: getDateOrder,
          duration: getDuration,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        const queryParams = `?roomNumber=${getRoomId}&bookingDate=${getDateOrder}&duration=${getDuration}`;
        navigate("/productdetail" + queryParams);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
              <input
                type="date"
                id="tglPesan"
                placeholder="Masukkan Tanggal Pesan"
              />
            </div>
            <div className="form-group">
              <label htmlFor="durasi">Durasi Pemesanan</label>
              <input
                type="text"
                id="durasi"
                placeholder="Masukkan Durasi Pemesanan"
              />
            </div>
          </form>
          <Button className="btn-tambahPesanan" onClick={SetBookOrder}>
            Tambah
          </Button>
        </div>
      </div>
    </>
  );
}
