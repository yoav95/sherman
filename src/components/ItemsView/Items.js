"use client";
import styles from "./Items.module.css";

import React from "react";
import Container from "@/components/UI/Container";
import { useEffect, useState } from "react";
import ItemsNavbar from "./ItemsNavbar";
import Pagination from "./Pagination";
import ItemClient from "./ItemClient";
import { getHerbewLocation } from "@/utils/englishCategoryToHebrew";
const Items = ({ listingsData, type }) => {
  const [listings, setListings] = useState(JSON.parse(listingsData));
  const [listingsToRender, setListingsToRender] = useState(
    JSON.parse(listingsData)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const handlePaginate = (x) => {
    setCurrentPage(x);
  };
  let currentListings = null;
  let numberOfListings = null;
  if (listingsToRender) {
    numberOfListings = listingsToRender.length;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    currentListings = [...listingsToRender];
    currentListings = currentListings.slice(indexOfFirstPost, indexOfLastPost);
  }
  const filterListingsByLocation = (location) => {
    const hebrewLocation = getHerbewLocation(location);
    const newListings = [...listings];
    if (location === null) {
      return newListings;
    }
    return newListings.filter((listing) => listing.location === hebrewLocation);
  };

  const filterListingsByDealType = (listings, dealType) => {
    if (dealType === null) {
      return listings;
    }
    const hebrewDealType = dealType === "rent" ? "השכרה" : "מכירה";

    return listings.filter(
      (listing) =>
        listing.dealType === hebrewDealType ||
        listing.dealType === "השכרה ומכירה"
    );
  };

  const filterItems = (location, dealType) => {
    const filteredByLocation = filterListingsByLocation(location);
    const filteredFinal = filterListingsByDealType(
      filteredByLocation,
      dealType
    );
    setListingsToRender(filteredFinal);
    setCurrentPage(1);
  };
  return (
    <>
      <ItemsNavbar mode="items" title={type} onFilter={filterItems} />
      <Container type={true}>
        <div className={styles.items}>
          {currentListings &&
            currentListings.map((listing) => (
              <ItemClient key={listing.id} {...listing} />
            ))}
        </div>
        {currentListings && numberOfListings >= postsPerPage && (
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={numberOfListings}
            paginate={handlePaginate}
            currentPage={currentPage}
          />
        )}
      </Container>
    </>
  );
};

export default Items;
