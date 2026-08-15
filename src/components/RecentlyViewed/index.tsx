"use client";
import React from "react";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcrumb";
import SingleGridItem from "../Shop/SingleGridItem";
import shopData from "../Shop/shopData";

const RecentlyViewed = () => {
  const recentlyViewed = shopData.slice(0, 8);

  return (
    <>
      <Breadcrumb title={"Recently Viewed"} pages={["Recently Viewed"]} />
      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5">
            <div>
              <h2 className="font-medium text-dark text-2xl mb-1.5">
                Recently Viewed
              </h2>
              <p className="text-custom-sm">
                Showing <span className="text-dark">{recentlyViewed.length}</span>{" "}
                products you have viewed recently
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="inline-flex font-medium text-dark bg-white shadow-1 py-3 px-6 rounded-md ease-out duration-200 hover:text-white hover:bg-blue">
                Clear History
              </button>

              <Link
                href="/shop-with-sidebar"
                className="inline-flex font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark"
              >
                Continue Shopping
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-7.5 gap-y-9">
            {recentlyViewed.map((item, key) => (
              <SingleGridItem item={item} key={key} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentlyViewed;
