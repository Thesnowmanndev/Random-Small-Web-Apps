import React from "react";
import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <section lang="en">
      <Head>
        {/* TODO Optimize SEO */}
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO Navbar */}
      <div>
        <main className="container mx-auto">{children}</main>
      </div>
      {/* TODO Footer */}
    </section>
  );
}
