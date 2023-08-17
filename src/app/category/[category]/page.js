import React from "react";
import Container from "@/components/UI/Container";
import Item from "@/components/ItemsView/Item";
import styles from "./page.module.css";
import { getCategory } from "@/services/services";
import { getHebrewTitle } from "@/utils/englishCategoryToHebrew";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }) {
  const hebrewTitle = getHebrewTitle(params.category);
  return {
    title: `שרמן נדל"ן | ${hebrewTitle}`,
  };
}

export function generateStaticParams() {
  return [
    {
      category: "offices",
    },
    {
      category: "stores",
    },
    {
      category: "logistics",
    },
    {
      category: "fields",
    },
    {
      category: "houses",
    },
    {
      category: "estate",
    },
  ];
}

export default async function Page({ params }) {
  const hebrewTitle = getHebrewTitle(params.category);
  if (hebrewTitle === null) {
    redirect("/");
  }
  const listingsToRender = await getCategory(hebrewTitle);
  return (
    <>
      <div className={styles.top}>
        <Container>
          <h1>{hebrewTitle}</h1>
        </Container>
      </div>
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
}
