import Signin from "@/components/Auth/Signin";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "KisCart - Signin Page",
  description: "KisCart is a modern and user-friendly shopping cart application that allows users to easily browse and purchase products online. With a sleek interface and seamless checkout process, KisCart provides a convenient and enjoyable shopping experience for customers.",
  // other metadata
};

const SigninPage = () => {
  return (
    <main>
      <Signin />
    </main>
  );
};

export default SigninPage;
