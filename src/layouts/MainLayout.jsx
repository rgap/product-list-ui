export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <h1 className="main-layout__title">Inventario</h1>
      </header>
      <main className="main-layout__content">{children}</main>
    </div>
  );
}
