import styles from "./Dish.module.css";
export default function Dish({ rett }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{rett.tittel}</h2>
      <p className={styles.price}>Pris: {rett.pris}&thinsp;kr</p>
      <p className={styles.ingredients}>Ingredienser: {rett.ingredienser}</p>
      {/* <p className={styles.category}>Kategori: {rett.kategori}</p> */}
    </div>
  );
}
