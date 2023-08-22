import React from "react";
import ContactBlock from "@/components/ContactBlock/ContactBlock";
import styles from "./page.module.css";
import Properties from "@/components/SingleItemView/Properties";
import { getListing, getAllListings } from "@/services/services";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const revalidate = 60 * 60;

export async function generateStaticParams() {
  const data = await getAllListings();
  return data.map((listing) => ({
    itemId: listing.id,
  }));
}

export async function generateMetadata({ params }) {
  const listing = await getListing(params.itemId);
  return {
    title: listing.title,
    description: listing.text,
  };
}

const getImagesLinks = async (imageLocation, imagesLocations) => {
  const storage = getStorage();
  const imageRef = ref(storage, imageLocation);
  const imageUrl = await getDownloadURL(imageRef);
  let imagesUrls = [];
  if (imagesLocations) {
    let parray = [];
    imagesLocations.forEach((location) => {
      parray.push(getDownloadURL(ref(storage, location)));
    });

    await Promise.all(parray).then((res) => {
      imagesUrls = res;
    });
  }

  return {
    imageUrl: imageUrl,
    imagesUrls: imagesLocations !== null ? imagesUrls : null,
  };
};

const Item = async ({ params }) => {
  const data = await getListing(params.itemId);
  let fileNameInUrl = data.imageUrl;
  if (data.imageUrl.split("/").length > 1) {
    const parts = data.imageUrl.split("/");
    fileNameInUrl = "images/" + parts[parts.length - 1];
  }

  const { imageUrl, imagesUrls } = await getImagesLinks(
    fileNameInUrl,
    data.images ? data.images : null
  );

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <h2>{data.title}</h2>
        {imageUrl && <img src={imageUrl} />}
      </div>
      <h3 className={styles.heading}>תיאור:</h3>
      <p className={styles.text}>{data.text}</p>
      <h3 className={styles.heading}>פרטים</h3>
      <Properties data={data} />

      <div className={styles.images}>
        {imagesUrls ? (
          imagesUrls.map((url) => (
            <div key={url} className={styles.photo}>
              <img src={url} />
            </div>
          ))
        ) : (
          <p>איו תמונות נוספות</p>
        )}
      </div>

      <h3 className={styles.heading}>מתעניין בקשר לנכס? צור איתנו קשר</h3>
      <ContactBlock />
    </div>
  );
};

export default Item;
