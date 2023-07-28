import * as React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { resolve } from "url";
import { processEnv } from "@libs/processEnv";

export default class HeaderDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const { pageProps } = this.props.__NEXT_DATA__.props;
    const { cmsData, settings } = pageProps || { cmsData: null, settings: null };
    const { settings: cmsSettings, bodyClass } = cmsData || { settings: null, bodyClass: "" };
    const { lang } = settings || cmsSettings || { lang: "en" };
    return (
      <Html {...{ lang, className: "casper" }}>
        <Head>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="UauNews RSS Feed"
            href={`${resolve(processEnv.siteUrl, "rss.xml")}`}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Exo+2:wght@700&family=Oxygen:wght@400;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Russo+One&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          />
          <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/gill-sans" />
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/apple%2Ficon%2F57x57.png?alt=media"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/apple%2Ficon%2F60x60.png?alt=media"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/apple%2Ficon%2F72x72.png?alt=media"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/apple%2Ficon%2F76x76.png?alt=media"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/apple%2Ficon%2F114x114.png?alt=media"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/apple%2Ficon%2F120x120.png?alt=media"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/apple%2Ficon%2F144x144.png?alt=media"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/apple%2Ficon%2F152x152.png?alt=media"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/apple%2Ficon%2F180x180.png?alt=media"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/android%2Ficon%2F192x192.png?alt=media"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicon%2F32x32.png?alt=media"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicon%2F96x96.png?alt=media"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicon%2F16x16.png?alt=media"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta
            name="msapplication-TileImage"
            content="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/ms%2Ficon-144x144.png?alt=media"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body {...{ className: bodyClass }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
