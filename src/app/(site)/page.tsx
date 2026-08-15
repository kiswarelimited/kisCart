import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KisCart - Modern Shopping Cart Application",
  description: "KisCart is a modern and user-friendly shopping cart application that allows users to easily browse and purchase products online. With a sleek interface and seamless checkout process, KisCart provides a convenient and enjoyable shopping experience for customers.",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
