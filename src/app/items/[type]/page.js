import React from "react";
import { getHebrewDealType, getHerbewLocation } from "@/utils/englishCategoryToHebrew";
import Items from "@/components/ItemsView/Items";
import { getListings, getListingsByRegion } from "@/services/services";
import { redirect } from "next/navigation";
import CategoryNavigationBar from "@/components/CategoryNavigationBar/CategoryNavigationBar";
export const dynamic = "force-dynamic";

const isRegion = (type) => ["south", "north", "center"].includes(type);

export async function generateMetadata({ params }) {
  const hebrewTitle = isRegion(params.type)
    ? getHerbewLocation(params.type)
    : getHebrewDealType(params.type);
  return {
    title: `שרמן נדל"ן | ${hebrewTitle}`,
  };
}

export const revalidate = 60 * 60;
// false | 'force-cache' | 0 | number

export function generateStaticParams() {
  return [
    { type: "rent" },
    { type: "sale" },
    { type: "south" },
    { type: "north" },
    { type: "center" },
  ];
}

const Category = async ({ params }) => {
  let hebrewTitle;
  let listingsData;

  if (isRegion(params.type)) {
    hebrewTitle = getHerbewLocation(params.type);
    listingsData = await getListingsByRegion(hebrewTitle);
  } else {
    hebrewTitle = getHebrewDealType(params.type);
    if (hebrewTitle === null) {
      redirect("/");
    }
    listingsData = await getListings(hebrewTitle);
  }

  return (
    <>
      <CategoryNavigationBar />
      <Items listingsData={JSON.stringify(listingsData)} type={hebrewTitle} />
    </>
  );
};

export default Category;
