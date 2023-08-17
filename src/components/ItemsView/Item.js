import styles from "./Item.module.css";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
import Link from "next/link";

const Item = async ({
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
  // const router = useRouter();
  let theImageUrl = "";
  if (imageUrl) {
    const parts = imageUrl.split("/");
    const fileNameInUrl = "images/" + parts[parts.length - 1];
    const storage = getStorage();
    const starsRef = ref(storage, fileNameInUrl);
    const url = await getDownloadURL(starsRef);
    theImageUrl = url;
  }

  return (
    <Link href={`/item/${id}`}>
      <div className={styles.item}>
        <div className={styles.image}>
          <img src={theImageUrl} alt="" fill={true} />
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

export default Item;
