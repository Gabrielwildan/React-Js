import { useState } from "react";
import Tabel from "./Tabel";

function Menu() {
    const title = "Menu List"
    const [menus, setMenu] = useState(
        [
            { idmenu: 1, idkategori: 1, menu: "Ayam Bakar", gambar: "ayambakar.jpg", harga: 15000 },
            { idmenu: 2, idkategori: 1, menu: "Ayam Goreng", gambar: "ayamgoreng.jpg", harga: 15000 },
            { idmenu: 3, idkategori: 2, menu: "Nasi Goreng", gambar: "nasigoreng.jpg", harga: 10000 },
            { idmenu: 4, idkategori: 3, menu: "Bakso", gambar: "bakso.jpg", harga: 8000 },
            { idmenu: 5, idkategori: 4, menu: "Es Jeruk", gambar: "esjeruk.jpg", harga: 5000 },
            { idmenu: 6, idkategori: 4, menu: "Es Teh", gambar: "teh.jpg", harga: 5000 },
        ]
    )
    return (
        <div className="App">
            <Tabel menu={menus} title={title} />
            <Tabel menu={menus.filter((data) => (data.idkategori === 1))} title="Menu Ayam" />
        </div>
    );
}

export default Menu;
