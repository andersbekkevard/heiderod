import styles from "./ShopPage.module.css";

const products = [
  { id: "eggs", name: "Egg" },
  { id: "rhubarb", name: "Rabarbra" },
  { id: "apples", name: "Epler" },
  { id: "potatoes", name: "Poteter" },
];

function ShopPage() {
  return (
    <section className={styles.shop}>
      <div className="container">
        <h2>Kjøp våre produkter</h2>
        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <h3>{product.name}</h3>
              <button>Kjøp nå</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
