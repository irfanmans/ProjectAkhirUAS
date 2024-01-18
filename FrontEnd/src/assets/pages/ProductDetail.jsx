import React from "react";
import img20 from "../Image/image1.jpg";
import Button from "../components/Button/Button";
import { NavLink, useLocation } from "react-router-dom";

export default function ProductDetail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const roomNumber = queryParams.get("roomNumber");
  const bookingDate = queryParams.get("bookingDate");
  const duration = queryParams.get("duration");

  return (
    <>
      <div className="main-productDetail">
        <div className="card" style={{ width: "18rem" }}>
          <img src={img20} alt="" />
          <div className="card-body">
            <p>Nomor Kamar : {roomNumber}</p>
            <p>Tanggal Pesan : {bookingDate}</p>
            <p>Durasi : {duration}</p>
          </div>
          <div className="main-btn">
            <NavLink to="/addbook" style={{ display: "contents" }}>
              <Button type="submit" className="btn-edit">
                Edit
              </Button>
            </NavLink>
            <NavLink style={{ display: "contents" }}>
              <Button type="submit" className="btn-hapus">
                Hapus
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
