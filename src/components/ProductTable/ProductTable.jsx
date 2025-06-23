import HorizontalScrollShadows from "../HorizontalScrollShadows/HorizontalScrollShadows";
import styles from "./ProductTable.module.scss";

export default function ProductTable({ products = [] }) {
  const headers = ["Codigo", "Nombre", "Otros Nombres", "Fotos", "Descripcion", "Precio (S/)", "Otros Precios", "Notas", "Categoría", "Stock"];

  return (
    <HorizontalScrollShadows>
      <table className={styles["product-table"]}>
        <thead>
          <tr className={styles["product-table__header"]}>
            <th className={`${styles["product-table__cell"]} ${styles["product-table__cell--codigo"]}`}>Codigo</th>
            <th className={`${styles["product-table__cell"]} ${styles["product-table__cell--nombre"]}`}>Nombre</th>
            <th className={`${styles["product-table__cell"]} ${styles["product-table__cell--otros-nombres"]}`}>Otros Nombres</th>
            <th className={`${styles["product-table__cell"]} ${styles["product-table__cell--fotos"]}`}>Fotos</th>
            <th className={`${styles["product-table__cell"]} ${styles["product-table__cell--descripcion"]}`}>Descripcion</th>
            <th className={`${styles["product-table__cell"]} ${styles["product-table__cell--precio"]}`}>Precio (S/)</th>
            <th className={`${styles["product-table__cell"]} ${styles["product-table__cell--otros-precios"]}`}>Otros Precios</th>
            <th className={`${styles["product-table__cell"]} ${styles["product-table__cell--notas"]}`}>Notas</th>
            <th className={`${styles["product-table__cell"]} ${styles["product-table__cell--categoria"]}`}>Categoría</th>
            <th className={`${styles["product-table__cell"]} ${styles["product-table__cell--stock"]}`}>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr className={styles["product-table__row"]} key={product.id || idx}>
              <td className={`${styles["product-table__cell"]} ${styles["product-table__cell--codigo"]}`}>{product.code || ""}</td>
              <td className={`${styles["product-table__cell"]} ${styles["product-table__cell--nombre"]}`}>{product.name}</td>
              <td className={`${styles["product-table__cell"]} ${styles["product-table__cell--otros-nombres"]}`}>{product.otherNames || ""}</td>
              <td className={`${styles["product-table__cell"]} ${styles["product-table__cell--fotos"]}`}>{/* Placeholder */}</td>
              <td className={`${styles["product-table__cell"]} ${styles["product-table__cell--descripcion"]}`}>{product.description || ""}</td>
              <td className={`${styles["product-table__cell"]} ${styles["product-table__cell--precio"]}`}>{product.price}</td>
              <td className={`${styles["product-table__cell"]} ${styles["product-table__cell--otros-precios"]}`}>{product.otherPrices || ""}</td>
              <td className={`${styles["product-table__cell"]} ${styles["product-table__cell--notas"]}`}>{product.notes || ""}</td>
              <td className={`${styles["product-table__cell"]} ${styles["product-table__cell--categoria"]}`}>{product.category || ""}</td>
              <td className={`${styles["product-table__cell"]} ${styles["product-table__cell--stock"]}`}>{product.stock ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </HorizontalScrollShadows>
  );
}
