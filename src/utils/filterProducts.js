export function filterProducts(products, searchTerm) {
  if (!searchTerm || searchTerm.trim() === "") {
    return products;
  }

  const normalizedSearchTerm = searchTerm.toLowerCase().trim();

  return products.filter(product => {
    const searchableFields = [product.name || "", product.description || "", product.notes || "", product.code || "", product.category || ""];

    return searchableFields.some(field => field.toLowerCase().includes(normalizedSearchTerm));
  });
}
