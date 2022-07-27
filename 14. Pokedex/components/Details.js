import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Navbar></Navbar>
      </div>
      <main>{children}</main>
    </div>
  );
}
