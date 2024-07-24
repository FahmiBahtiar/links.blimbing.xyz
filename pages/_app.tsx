import type { AppProps } from "next/app";
import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

import "../styles/globals.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

function MyApp({ Component, pageProps }: AppProps) {
  // Umami Analytics
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://analytics.eu.umami.is/script.js";
    script.dataset.websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID; // Mengambil nilai dari variabel lingkungan
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>

      <Analytics />

      <NextSeo
        title="Fahmi Bahtiar Adi Nugroho | Backend Developer"
        titleTemplate="Fahmi Bahtiar"
        defaultTitle="Fahmi Bahtiar"
        description="Fahmi Bahtiar Adi Nugroho is a Backend Developer who loves to explore new things in the world of technology."
        openGraph={{
          url: "https://me.blimbing.xyz",
          title: "Fahmi Bahtiar | Backend Developer",
          description:
            "Fahmi Bahtiar Adi Nugroho is a Backend Developer who loves to explore new things in the world of technology.",
          images: [
            {
              url: "https://me.blimbing.xyz",
              alt: "Fahmi Bahtiar | Backend Developer",
            },
          ],
        }}
        twitter={{
          handle: "@blimbing_",
          site: "@blimbing_",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              " Discord Bot Developer, Web Developer, tech enthusiast, open source",
          },
        ]}
      />

      <Head>
        <link rel="icon" type="image/png" href="/logo.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
