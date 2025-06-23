import { useState } from "react";
import ProductTable from "./components/ProductTable/ProductTable.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { filterProducts } from "./utils/filterProducts.js";

const sampleProducts = [
  {
    id: 1,
    code: "TS200L",
    name: "Terma Solar 200L",
    description: "Capacidad: 200L, Tubos de vací...",
    price: "S/850.00",
    otherPrices: "Mayorista: S/78...",
    notes: "Incluye kit de ins...",
    stock: 12,
  },
  {
    id: 2,
    code: "PS450M",
    name: "Panel Solar 450W Mon...",
    description: "450W, Monocristalino, 144 celda...",
    price: "S/180.00",
    otherPrices: "Pack 10 unidade...",
    notes: "Garantía 25 año...",
    stock: 8,
  },
  {
    id: 3,
    code: "CMPPT60",
    name: "Controlador MPPT 60A",
    description: "60A, MPPT, 12V/24V automático...",
    price: "S/95.00",
    otherPrices: "Sin descuentos ...",
    notes: "Compatible con ...",
    stock: 0,
  },
  {
    id: 4,
    code: "BL100",
    name: "Batería Litio 100Ah",
    description: "100Ah, LiFePO4, 12V, BMS integ...",
    price: "S/420.00",
    otherPrices: "Pack 4 unidades...",
    notes: "Ideal para siste...",
    stock: 15,
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = filterProducts(sampleProducts, searchTerm);

  const handleSearch = term => {
    setSearchTerm(term);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Inventario RIGAL</h1>
      <SearchBar onSearch={handleSearch} placeholder="Buscar por nombre, descripción o notas..." />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
