import React from "react";
import RecentlyViewed from "@/components/RecentlyViewed";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recently Viewed | KisCart",
  description:
    "View all the products you recently browsed on KisCart and pick up right where you left off.",
};

const RecentlyViewedPage = () => {
  return (
    <main>
      <RecentlyViewed />
    </main>
  );
};

export default RecentlyViewedPage;
