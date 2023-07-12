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
      <title>{title}</title>
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
      <link rel="apple-touch-icon" sizes="57x57" href="/assets/images/favicons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/favicons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/favicons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/favicons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/favicons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/favicons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/favicons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/favicons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/favicons/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/favicons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/assets/images/favicons/ms-icon-144x144.png" />
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
