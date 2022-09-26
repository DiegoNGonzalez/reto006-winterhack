import React from "react";
import iconoCarrito from "../assets/statics/carrito.png"
import iconoVolver from "../assets/statics/volver.png"

export default function Header() {
    return (
        <>
            <a href="carrito.html">
                <img src={iconoCarrito} alt="" className="carritou" />
            </a>
            <a href="">
                <img src={iconoVolver} alt="" className="volver" />
            </a>

            <h1 className="titulo">
                Dev <br />
                RockStore
            </h1>
        </>
    );
}
