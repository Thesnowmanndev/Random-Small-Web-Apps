import Head from "next/head";

export default function Layout({ title, description, children }) {
  return (
    <section>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      {/* TODO Navbar */}
      <div>
        <main className="container mx-auto">{children}</main>
      </div>
      {/* TODO Footer */}
    </section>
  );
}
