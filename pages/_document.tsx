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

          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" />
        </Head>
        <body {...{ className: bodyClass }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
