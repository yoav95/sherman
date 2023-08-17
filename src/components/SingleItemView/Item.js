"use client";
import React from "react";
import ContactForm from "../ContactBlock/ContactForm";
import Properties from "./Properties";
import styles from "./Item.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "../../firebase/firebase";
const Item = ({ data }) => {
  const [imgUrl, setImgeUrl] = useState(null);
  const [imgsUrl, setImgsUrl] = useState(null);
  useEffect(() => {
    const y = async () => {
      const storage = getStorage();
      let array = [];
      await data.images.forEach(async (path) => {
        array.push(getDownloadURL(ref(storage, path)));
        // const url = await getDownloadURL(ref(storage, path));
        // console.log(url);
        // array.push(url);
      });
      Promise.all(array).then((res) => {
        console.log(res);
        setImgsUrl(res);
      });
      // console.log(array);
      // setImgsUrl(array);
      // data.images.forEach((path) => {
      //   const url = await getDownloadURL(ref(storage, path))
      // });
    };
    if (data.images && data.images.length > 0) {
      y();
    }
  }, []);
  useEffect(() => {
    const parts = data.imageUrl.split("/");
    const fileNameInUrl = "images/" + parts[parts.length - 1];
    const storage = getStorage();
    const starsRef = ref(storage, fileNameInUrl);
    getDownloadURL(starsRef).then((url) => {
      // Insert url into an <img> tag to "download"
      setImgeUrl(url);
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <h2>{data.title}</h2>
        <img src={imgUrl} />
      </div>
      <h3 className={styles.heading}>תיאור:</h3>
      <p className={styles.text}>{data.text}</p>
      <h3 className={styles.heading}>פרטים</h3>
      <Properties data={data} />
      {imgsUrl && (
        <div className={styles.images}>
          {imgsUrl &&
            imgsUrl.map((url) => (
              <div key={url} className={styles.photo}>
                <img src={url} />
              </div>
            ))}
        </div>
      )}
      <h3 className={styles.heading}>מתעניין בקשר לנכס? צור איתנו קשר</h3>
      <ContactForm />
    </div>
  );
};

export default Item;
