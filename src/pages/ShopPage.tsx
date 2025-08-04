import styles from "./ShopPage.module.css";
import { getText } from "../utils/textManager";

const products = [
  { id: "eggs", name: getText("shop.products.eggs") },
  { id: "rhubarb", name: getText("shop.products.rhubarb") },
  { id: "apples", name: getText("shop.products.apples") },
  { id: "potatoes", name: getText("shop.products.potatoes") },
];

function ShopPage() {
  return (
    <section className={styles.shop}>
      <div className="container">
        <h2>{getText("shop.title")}</h2>
        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <h3>{product.name}</h3>
              <button>{getText("shop.buyButton")}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShopPage;
