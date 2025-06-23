import { sampleProducts } from "./sampleProducts";

// API function to fetch products (simulated)
export async function fetchProducts() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Simulate API call response
  return sampleProducts;
}
