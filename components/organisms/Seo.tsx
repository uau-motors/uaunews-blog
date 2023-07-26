import { useRouter } from "next/router";
import Head from "next/head";
import url from "url";

import { Author, PostOrPage, Tag } from "@tryghost/content-api";
import { SEOI } from "@utility/interfaces";

const siteUrl = "http://localhost:3000";
const twitter = "https://twitter.com";
const title = "UauNews";
const description = "O canal de conteúdo da UauMotors";

const getPublicTags = (tags: Tag[] | undefined) =>
  tags ? tags.filter((tag) => tag.name?.substr(0, 5) !== "hash-") : [];

export const SEO = (props: SEOI) => {
  const { title: t, description: d, article } = props;

  const {
    og_title,
    og_description,
    published_at,
    updated_at,
    primary_author,
    primary_tag,
    twitter_title,
    twitter_description
  } = article || {};

  const type = article ? "article" : "website";
  const facebook = primary_author?.facebook;

  const router = useRouter();
  const canonical = url.resolve(siteUrl, router.asPath);

  // const { twitter, title: settingsTitle, description: settingsDescription, meta_title, meta_description } = settings;

  const jsonLd = getJsonLd({ ...props, title, description });

  return (
    <Head>
      <title>{title} - Mude de marcha com a UauNews - Seu hub de conteúdo Automotivo</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={og_title || title} />
      <meta property="og:description" content={og_description || description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={canonical} />
      {published_at && <meta property="article:published_time" content={published_at} />}
      {updated_at && <meta property="article:modified_time" content={updated_at} />}
      {getPublicTags(article?.tags).map(({ name: keyword }, i) => (
        <meta property="article:tag" content={keyword} key={i} />
      ))}
      {facebook && (
        <meta property="article:author" content={`https://www.facebook.com/${facebook.replace(/^\//, ``)}/`} />
      )}
      <meta property="twitter:title" content={twitter_title || title} />
      <meta property="twitter:description" content={twitter_description || description} />
      <meta property="twitter:url" content={canonical} />
      {primary_author && <meta property="twitter:label1" content="Written by" />}
      {primary_author && <meta property="twitter:data1" content={primary_author?.name} />}
      {primary_tag && <meta property="twitter:label2" content="Filed under" />}
      {primary_tag && <meta property="twitter:data2" content={primary_tag?.name} />}
      <meta property="twitter:card" content="summary_large_image" />
      {twitter && <meta property="twitter:creator" content={twitter} />}
      {twitter && <meta property="twitter:site" content={`https://twitter.com/${twitter.replace(/^@/, ``)}/`} />}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2FFapple-icon-57x57.png?alt=media"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Fapple%2Ficon%2F60x60.png?alt=media"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Fapple%2Ficon%2F72x72.png?alt=media"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Fapple%2Ficon%2F76x76.png?alt=media"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Fapple%2Ficon%2F114x114.png?alt=media"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Fapple%2Ficon%2F120x120.png?alt=media"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Fapple%2Ficon%2F144x144.png?alt=media"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Fapple%2Ficon%2F152x152.png?alt=media"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Fapple%2Ficon%2F180x180.png?alt=media"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Fandroid%2Ficon%2F192x192.png?alt=media"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Ffavicons2F32x32.png?alt=media"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Ffavicons2F96x96.png?alt=media"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2FFfavicon-16x16.png?alt=media"
      />
      <link
        rel="icon"
        href="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Ffavicon.ico?alt=media"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="https://firebasestorage.googleapis.com/v0/b/uaumotors-5211e.appspot.com/o/favicons%2Fms%2Ficon-144x144.png?alt=media"
      />
      <meta name="theme-color" content="#ffffff" />

      {/* {seoImage && <meta name="twitter:image" content={seoImage.url} />}
      {seoImage && <meta property="og:image" content={seoImage.url} />}
      {seoImage && <meta property="og:image:width" content={`${seoImage.dimensions.width}`} />}
      {seoImage && <meta property="og:image:height" content={`${seoImage.dimensions.height}`} />} */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}></script>
    </Head>
  );
};

export const authorSameAs = (author: Author) => {
  const { website, twitter, facebook } = author;

  const authorProfiles = [
    website,
    twitter && `https://twitter.com/${twitter.replace(/^@/, ``)}/`,
    facebook && `https://www.facebook.com/${facebook.replace(/^\//, ``)}/`
  ].filter((element) => !!element);

  return (authorProfiles.length > 0 && `["${authorProfiles.join(`", "`)}"]`) || undefined;
};

const getJsonLd = ({ title, description, canonical, settings, sameAs, article }: SEOI) => {
  const pubLogoUrl = "logo.svg";
  const type = article ? "Article" : "WebSite";

  return {
    "@context": `https://schema.org/`,
    "@type": type,
    sameAs,
    url: canonical,
    ...(article && { ...getArticleJsonLd(article) }),
    publisher: {
      "@type": `Organization`,
      name: title,
      logo: {
        "@type": `ImageObject`,
        url: pubLogoUrl,
        width: 60,
        height: 60
      }
    },
    mainEntityOfPage: {
      "@type": `WebPage`,
      "@id": siteUrl
    },
    description
  };
};

const getArticleJsonLd = (article: PostOrPage) => {
  const { published_at, updated_at, primary_author, tags, meta_title, title } = article;
  const name = primary_author?.name;
  const image = primary_author?.profile_image;
  const sameAs = (primary_author && authorSameAs(primary_author)) || undefined;
  const publicTags = getPublicTags(tags);
  const keywords = publicTags?.length ? publicTags.join(`, `) : undefined;
  const headline = meta_title || title;

  return {
    datePublished: published_at,
    dateModified: updated_at,
    author: {
      "@type": "Article",
      name,
      image,
      sameAs
    },
    keywords,
    headline
  };
};
