import styles from "./Dish.module.css";
import { getDominantHue } from "../utils/getDominantHue";
import { useEffect, useState } from "react";
export default function Dish({ rett }) {
  //   const imageUrl = `https://source.unsplash.com/featured/300x200/?${rett.tittel}` This is broken, even without language stuff; Using manual vectors instead
  // Simple slugify function for generating icon paths
  const slugify = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/æ/g, "ae")
      .replace(/ø/g, "o")
      .replace(/å/g, "a")
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
  const [hue, setHue] = useState(0);
  useEffect(() => {
    getDominantHue(`/icons/${slugify(rett.tittel)}.svg`)
      .then((h) => {
        console.log("Hue fra svg for", rett.tittel, "er", h);
        setHue(h);
      })
      .catch((err) => {
        console.error("Error fetching dominant hue for", rett.tittel, err);
      });
  }, [rett.tittel]);
  //   console.log("Dominant hue for", rett.tittel, "is", hue);
  const iconPath = `/icons/${slugify(rett.tittel)}.svg`;
  return (
    <div className={styles.card} style={{ "--hue": hue }}>
      <img
        src={`${import.meta.env.BASE_URL}icons/${slugify(rett.tittel)}.svg`}
        alt={rett.tittel}
        className={styles.icon}
      />
      <h2 className={styles.title}>{rett.tittel}</h2>
      <p className={styles.price}>Pris: {rett.pris}&thinsp;kr</p>
      <p className={styles.ingredients}>Ingredienser: {rett.ingredienser}</p>
      {/* <img src={imageUrl} alt={rett.tittel} className={styles.image} /> */}
      {/* <p className={styles.category}>Kategori: {rett.kategori}</p> */}
    </div>
  );
}
