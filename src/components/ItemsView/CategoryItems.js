"use client";
import styles from "./Items.module.css";
import React from "react";
import { db } from "@/firebase/firebase";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  or,
  query,
  where,
} from "firebase/firestore";
import Container from "@/components/UI/Container";
import { useEffect, useState } from "react";
import Item from "./Item";
import ItemsNavbar from "./ItemsNavbar";
import { getHebrewTitle } from "@/utils/englishCategoryToHebrew";
const CategoryItems = (props) => {
  const [listings, setListings] = useState(null);
  const [listingsToRender, setListingsToRender] = useState(null);
  useEffect(() => {
    const x = async () => {
      const db = getFirestore();
      const category = getHebrewTitle(props.category);
      const q = query(
        collection(db, "listings"),
        or(
          where("propertyType", "==", category)
          // where("dealType", "==", "השכרה ומכירה")
        )
      );
      const querySnapshot = await getDocs(q);
      let newListings = [];
      querySnapshot.forEach((doc) => {
        newListings.push({ ...doc.data(), id: doc.id });
      });
      setListings(newListings);
      setListingsToRender(newListings);
    };
    x();
  }, []);

  const turnOnFilters = (location, dealType) => {
    // this function will return the filtered listings
    const filteredListingsByLocation = handleLocationChange(location);
    let hebrewDealType = null;
    if (dealType) {
      hebrewDealType = dealType === "rent" ? "השכרה" : "מכירה";
    }
    const finalListingsFiltered = handleDealTypeChange(
      filteredListingsByLocation,
      hebrewDealType
    );
    setListingsToRender(finalListingsFiltered);
  };
  const handleLocationChange = (loc) => {
    if (loc === null) {
      return listings;
    }
    let hebrewLoc = "";
    if (loc === "south") {
      hebrewLoc = "דרום";
    } else if (loc === "center") {
      hebrewLoc = "מרכז";
    } else if (loc === "north") {
      hebrewLoc = "צפון";
    }
    const newListingsToRender = [...listings].filter(
      (listing) => listing.location === hebrewLoc
    );
    return newListingsToRender;
  };
  const handleDealTypeChange = (locationSorted, dealType) => {
    console.log("preform filter by: " + dealType);
    console.log(locationSorted);
    if (dealType === null) {
      return locationSorted;
    }
    return locationSorted.filter((listing) => {
      return (
        listing.dealType === dealType || listing.dealType === "השכרה ומכירה"
      );
    });
  };
  console.log(listings);
  return (
    <>
      <ItemsNavbar
        onLocationChange={handleLocationChange}
        onDealTypeChange={handleDealTypeChange}
        onFilterOn={turnOnFilters}
        type={props.category}
        mode="categories"
      />
      <Container type={true}>
        <div className={styles.items}>
          {listingsToRender &&
            listingsToRender.map((listing) => (
              <Item key={listing.id} {...listing} />
            ))}
        </div>
      </Container>
    </>
  );
};

export default CategoryItems;
