import React from 'react'
import Case from "./Case";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-600 py-2">
        <Case>
            <div className="flex justify-around items-center">
                <div>
                    <Link
                        className="mr-2 text-sm font-semibold uppercase text-white"
                        to="/"
                    >
                        Layanan Pengaduan
                    </Link>
                </div>
                <div>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/gallery">Gallery</NavLink>
                    <NavLink href="/StatusPengaduanUser">Status Pengaduan</NavLink>
                    <NavLink href="/StatusAspirasiUser">Status Aspirasi</NavLink>
                </div>
            </div>
        </Case>
    </div>
  )
}

export default Navbar
