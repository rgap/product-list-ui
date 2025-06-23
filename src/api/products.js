// Sample products for simulation
const sampleProducts = [
  {
    id: 1,
    code: "TS200L",
    name: "Terma Solar 200L",
    description: "Capacidad: 200L, Tubos de vacío de alto rendimiento",
    price: "S/850.00",
    otherPrices: "Mayorista: S/780.00",
    notes: "Incluye kit de instalación completo",
    stock: 12,
    category: "Termas Solares",
  },
  {
    id: 2,
    code: "PS450M",
    name: "Panel Solar 450W Monocristalino",
    description: "450W, Monocristalino, 144 celdas, alta eficiencia",
    price: "S/180.00",
    otherPrices: "Pack 10 unidades: S/1,650.00",
    notes: "Garantía 25 años de rendimiento",
    stock: 8,
    category: "Paneles Solares",
  },
  {
    id: 3,
    code: "CMPPT60",
    name: "Controlador MPPT 60A",
    description: "60A, MPPT, 12V/24V automático, pantalla LCD",
    price: "S/95.00",
    otherPrices: "Sin descuentos disponibles",
    notes: "Compatible con sistemas híbridos",
    stock: 0,
    category: "Controladores",
  },
  {
    id: 4,
    code: "BL100",
    name: "Batería Litio 100Ah",
    description: "100Ah, LiFePO4, 12V, BMS integrado",
    price: "S/420.00",
    otherPrices: "Pack 4 unidades: S/1,580.00",
    notes: "Ideal para sistemas off-grid",
    stock: 15,
    category: "Baterías",
  },
  {
    id: 5,
    code: "INV3000",
    name: "Inversor 3000W Senoidal",
    description: "3000W, onda senoidal pura, 12V/24V",
    price: "S/290.00",
    otherPrices: "Con instalación: S/350.00",
    notes: "Incluye protecciones avanzadas",
    stock: 6,
    category: "Inversores",
  },
  {
    id: 6,
    code: "REG40A",
    name: "Regulador PWM 40A",
    description: "40A, PWM, 12V/24V, protección sobrecarga",
    price: "S/45.00",
    otherPrices: "Pack 5 unidades: S/200.00",
    notes: "Básico para sistemas pequeños",
    stock: 20,
    category: "Reguladores",
  },
  {
    id: 7,
    code: "CB100W",
    name: "Caja de Batería 100Ah",
    description: "Caja protectora para batería 100Ah, ventilación",
    price: "S/75.00",
    otherPrices: "Con batería: consultar precio",
    notes: "Material resistente a la intemperie",
    stock: 3,
    category: "Accesorios",
  },
  {
    id: 8,
    code: "KIT500W",
    name: "Kit Solar Completo 500W",
    description: "Kit completo: panel 500W + batería + inversor + accesorios",
    price: "S/1,250.00",
    otherPrices: "Con instalación: S/1,450.00",
    notes: "Perfecto para casas pequeñas",
    stock: 4,
    category: "Kits Completos",
  },
];

// API function to fetch products (simulated)
export async function fetchProducts() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Simulate API call response
  return sampleProducts;
}
