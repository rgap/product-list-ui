import { useState } from "react";
import ProductTable from "./components/ProductTable/ProductTable.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import { useProducts } from "./hooks/useProducts.js";
import { filterProducts } from "./utils/filterProducts.js";

export default function App() {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = term => {
    setSearchTerm(term);
  };

  const filteredProducts = filterProducts(products, searchTerm);

  if (loading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Inventario RIGAL</h1>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Inventario RIGAL</h1>
        <p style={{ color: "red" }}>Error: {error}</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Inventario RIGAL</h1>
      <SearchBar onSearch={handleSearch} placeholder="Buscar por nombre, descripción o notas..." />
      <ProductTable products={filteredProducts} />
    </div>
  );
}
