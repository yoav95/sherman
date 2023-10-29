import React from "react";
import { getHebrewDealType } from "@/utils/englishCategoryToHebrew";
import Items from "@/components/ItemsView/Items";
import { getListings } from "@/services/services";
import { redirect } from "next/navigation";
import CategoryNavigationBar from "@/components/CategoryNavigationBar/CategoryNavigationBar";

export async function generateMetadata({ params }) {
  const hebrewTitle = getHebrewDealType(params.type);
  return {
    title: `שרמן נדל"ן | ${hebrewTitle}`,
  };
}

export const revalidate = 60 * 60;
// false | 'force-cache' | 0 | number

export function generateStaticParams() {
  return [
    {
      type: "rent",
    },
    {
      type: "sale",
    },
  ];
}

const Category = async ({ params }) => {
  const hebrewType = getHebrewDealType(params.type);
  if (hebrewType === null) {
    redirect("/");
  }
  const listingsData = await getListings(hebrewType);
  return (
    <>
      <CategoryNavigationBar />
      <Items listingsData={JSON.stringify(listingsData)} type={hebrewType} />
    </>
  );
};

export default Category;
