import HorizontalScrollShadows from "../HorizontalScrollShadows/HorizontalScrollShadows";
import styles from "./ProductTable.module.scss";

export default function ProductTable({ products = [] }) {
  const headers = ["Codigo", "Nombre", "Otros Nombres", "Fotos", "Descripcion", "Precio (S/)", "Otros Precios", "Notas", "Stock"];

  return (
    <HorizontalScrollShadows>
      <table className={styles["product-table"]}>
        <thead>
          <tr className={styles["product-table__header"]}>
            {headers.map(header => (
              <th key={header} className={styles["product-table__cell"]}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr className={styles["product-table__row"]} key={product.id || idx}>
              <td className={styles["product-table__cell"]}>{product.code || ""}</td>
              <td className={styles["product-table__cell"]}>{product.name}</td>
              <td className={styles["product-table__cell"]}>{product.otherNames || ""}</td>
              <td className={styles["product-table__cell"]}>{/* Placeholder */}</td>
              <td className={styles["product-table__cell"]}>{product.description || ""}</td>
              <td className={styles["product-table__cell"]}>{product.price}</td>
              <td className={styles["product-table__cell"]}>{product.otherPrices || ""}</td>
              <td className={styles["product-table__cell"]}>{product.notes || ""}</td>
              <td className={styles["product-table__cell"]}>{product.stock ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </HorizontalScrollShadows>
  );
}
