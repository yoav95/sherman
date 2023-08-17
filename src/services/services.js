import { firestore } from "@/firebase/index";
import { db } from "@/firebase/firebase";
import {
  getDocs,
  collection,
  query,
  where,
  or,
  orderBy,
  getDoc,
  doc,
} from "firebase/firestore";

const listingsRef = collection(db, "listings");

export const getListing = async (id) => {
  const docRef = doc(db, "listings", id);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getAllListings = async (type) => {
  try {
    const q = query(listingsRef, orderBy("on_update", "desc"));
    const querySnapshot = await getDocs(q);
    let listings = [];
    querySnapshot.forEach((doc) => {
      listings.push({ ...doc.data(), id: doc.id });
    });
    return listings;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getListings = async (type) => {
  try {
    const q = query(
      listingsRef,
      or(
        where("dealType", "==", type),
        where("dealType", "==", "השכרה ומכירה")
      ),
      orderBy("on_update", "desc")
    );
    const querySnapshot = await getDocs(q);
    let listings = [];
    querySnapshot.forEach((doc) => {
      listings.push({ ...doc.data(), id: doc.id });
    });
    return listings;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCategory = async (category) => {
  const q = query(
    listingsRef,
    where("propertyType", "==", category),
    orderBy("on_update", "desc")
  );
  try {
    const querySnapshot = await getDocs(q);
    let listings = [];
    querySnapshot.forEach((doc) => {
      listings.push({ ...doc.data(), id: doc.id });
    });
    return listings;
  } catch (error) {
    console.log(error);
    return null;
  }
};
