import * as React from "react";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { resolve } from "url";
import { processEnv } from "@libs/processEnv";

export default class HeaderDocument extends Document {
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
            title="UauMotors RSS Feed"
            href={`${resolve(processEnv.siteUrl, "rss.xml")}`}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Anton&family=Russo+One&family=Oxygen&family=Exo+2:wght@200;300;400;500;600;700;900&family=Lato:wght@300;400;700;900&family=Roboto:wght@300;400;500;700;900&family=Ubuntu:ital,wght@0,400;0,500;0,700;1,300&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          />
          <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/gill-sans" />
        </Head>
        <body {...{ className: bodyClass }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
