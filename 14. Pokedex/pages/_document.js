import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8"></meta>

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico"></link>

        {/* Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black"
        ></meta>

        {/* Windows Apps */}
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Facebook */}
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://pokedex-smallapps.vercel.app"
        ></meta>
        <meta property="og:title" content="All Pokedexs"></meta>
        <meta
          property="og:image"
          content="https://pokedex-smallapps.vercel.app/public/site-image.png"
        ></meta>
        <meta
          property="og:description"
          content="A responsive web app containing all Pokedexs (Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar)"
        ></meta>
        <meta property="og:site_name" content="Small Apps Pokedex"></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:image:width" content="1200"></meta>
        <meta property="og:image:height" content="630"></meta>

        {/* Twitter */}
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:site" content="@Kmart0819"></meta>
        <meta name="twitter:creator" content="@Kmart0819"></meta>
        <meta
          name="twitter:url"
          content="https://pokedex-smallapps.vercel.app"
        ></meta>
        <meta name="twitter:title" content="Small Apps Pokedex"></meta>
        <meta
          name="twitter:description"
          content="A responsive web app containing all Pokedexs (Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar)"
        ></meta>
        <meta
          name="twitter:image"
          content="https://pokedex-smallapps.vercel.app/public/site-image.png"
        ></meta>
      </Head>
      <body className="bg-gray-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
