import { useState } from "react";
import styles from "./SearchBar.module.scss";

export default function SearchBar({ onSearch, placeholder = "Buscar productos..." }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = e => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className={styles["search-bar"]}>
      <div className={styles["search-bar__container"]}>
        <div className={styles["search-bar__icon"]}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input type="text" className={styles["search-bar__input"]} placeholder={placeholder} value={searchTerm} onChange={handleInputChange} />
        {searchTerm && (
          <button type="button" className={styles["search-bar__clear"]} onClick={clearSearch} aria-label="Limpiar búsqueda">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
