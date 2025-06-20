import styles from "./ProductTable.module.scss";

export default function ProductTable({ products = [] }) {
  return (
    <table className={styles["product-table"]}>
      <thead>
        <tr className={styles["product-table__header"]}>
          <th className={styles["product-table__cell"]}>Nombre</th>
          <th className={styles["product-table__cell"]}>Precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, idx) => (
          <tr className={styles["product-table__row"]} key={product.id || idx}>
            <td className={styles["product-table__cell"]}>{product.name}</td>
            <td className={styles["product-table__cell"]}>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
