import styles from "./Menu.module.css";
import Dish from "./Dish.jsx";
export default function Menu({ retter }) {
  const grupperteRetter = retter.reduce((acc, rett) => {
    if (!acc[rett.kategori]) {
      acc[rett.kategori] = [];
    }
    acc[rett.kategori].push(rett);
    return acc;
  }, {});
  const rekkefølge = ["Forrett", "Hovedrett", "Dessert"];
  Object.keys(grupperteRetter).forEach((kategori) => {
    if (!rekkefølge.includes(kategori)) {
      rekkefølge.push(kategori);
    }
  });

  return (
    <div className={styles.grid}>
      {rekkefølge.map((kategori) => (
        <div key={kategori} className={styles.kategori}>
          <h2 className={styles.kategoriTittel}>{kategori}</h2>
          {grupperteRetter[kategori].map((rett) => (
            <Dish key={rett.id} rett={rett} />
          ))}
        </div>
      ))}
    </div>
  );
}
// console.log("Menu component rendered");
