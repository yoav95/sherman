"use client";
import styles from "./Item.module.css";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from "@/firebase/firebase";
import Link from "next/link";
import { useEffect, useState } from "react";
const ItemClient = ({
  title,
  images,
  text,
  dealType,
  location,
  price,
  imageUrl,
  id,
  area,
  city,
  squareMeter,
  propertyType,
}) => {
  const [theImageUrl, settheImageUrl] = useState(null);
  useEffect(() => {
    const loadImageUrl = async () => {
      if (imageUrl) {
        const parts = imageUrl.split("/");
        const fileNameInUrl = "images/" + parts[parts.length - 1];
        const storage = getStorage();
        const starsRef = ref(storage, fileNameInUrl);
        const url = await getDownloadURL(starsRef);
        settheImageUrl(url);
      }
    };
    loadImageUrl();
  }, []);

  return (
    <Link href={`/item/${id}`}>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={theImageUrl && theImageUrl} alt="" fill={true} />
        </div>
        <div className={styles.text}>
          <h3>{title}</h3>
          <div className={styles.control}>
            <div className={styles.division}>
              <div className={styles.property}>
                <p>עיר:</p>
                <p className={styles.value}>{city}</p>
              </div>
              <div className={styles.property}>
                <p>איזור:</p>
                <p className={styles.value}>{location}</p>
              </div>
              <div className={styles.property}>
                <p>סוג:</p>
                <p className={styles.value}>{dealType}</p>
              </div>
            </div>
            <div className={styles.division}>
              <div className={styles.property}>
                <p>{`מ"ר:`}</p>
                <p className={styles.value}>{squareMeter}</p>
              </div>
              <div className={styles.property}>
                <p>נכס:</p>
                <p className={styles.value}>{propertyType}</p>
              </div>
              <div className={styles.property}>
                <p>מחיר:</p>
                <p className={styles.value}>{price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemClient;
