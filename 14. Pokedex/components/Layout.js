import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ title, description, children }) {
  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <div>
        <Navbar />
        <main className="container mx-auto">{children}</main>
      </div>
      {/* TODO Footer */}
    </section>
  );
}
