import ProductTable from "./components/ProductTable/ProductTable.jsx";

const sampleProducts = [
  { id: 1, name: "Terma Solar 200L", price: "S/850.00" },
  { id: 2, name: "Panel Solar 450W", price: "S/180.00" },
];

export default function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>App</h1>
      <ProductTable products={sampleProducts} />
    </div>
  );
}
