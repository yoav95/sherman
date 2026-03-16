import React from "react";
import Items from "@/components/ItemsView/Items";
import { getCategory } from "@/services/services";
import { getHebrewTitle, getDisplayTitle } from "@/utils/englishCategoryToHebrew";
import { redirect } from "next/navigation";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const displayTitle = getDisplayTitle(params.category);
  return {
    title: `שרמן נדל"ן | ${displayTitle}`,
  };
}

export const revalidate = 60 * 60;

export function generateStaticParams() {
  return [
    { category: "offices" },
    { category: "stores" },
    { category: "logistics" },
    { category: "fields" },
    { category: "houses" },
    { category: "estate" },
  ];
}

export default async function Page({ params }) {
  const hebrewTitle = getHebrewTitle(params.category);
  const displayTitle = getDisplayTitle(params.category);
  if (hebrewTitle === null) {
    redirect("/");
  }
  const listingsToRender = await getCategory(hebrewTitle);
  return (
    <Items listingsData={JSON.stringify(listingsToRender)} type={displayTitle} />
  );
}
