import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products.js";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message || "Error loading products");
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    loadProducts();
  };

  return {
    products,
    loading,
    error,
    refetch,
  };
}
