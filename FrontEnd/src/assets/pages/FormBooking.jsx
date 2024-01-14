import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/Button/Button";

export default function ListProductDetail() {
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
                        <Button className="btn-tambahPesanan">Tambah</Button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}
