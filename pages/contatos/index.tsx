import React from "react";
import { useRouter } from "next/router";
import { Container, Grid } from "@mui/material";

import DefaultTemplate from "@components/templates";
import settings from "@utility/Settings";
import { SEO } from "@organisms/meta/seo";
import { CmsData } from "@utility/interfaces";
import { BodyClass } from "@helpers/BodyClass";

export const getStaticProps = async () => {
  const cmsData = {
    bodyClass: BodyClass({ isHome: true })
  };

  return {
    revalidate: 10,
    props: { cmsData }
  };
};

import ContactPage from "@organisms/contact";

const Contact: React.FC<{
  cmsData: CmsData;
}> = (props) => {
  const router = useRouter();
  if (router.isFallback) return <div className="loading">Carregando...</div>;
  const bodyClass = BodyClass({ isHome: false });
  const { seo } = settings;

  return (
    <>
      <SEO {...{ title: seo.title, description: seo.description }} />
      <DefaultTemplate {...{ bodyClass, id: "contact", header: true, footer: true }}>
        <Container>
          <ContactPage />
        </Container>
      </DefaultTemplate>
    </>
  );
};

export default Contact;
