import React from "react";
import { useRouter } from "next/router";

import DefaultTemplate from "@components/templates";
import settings from "@utility/Settings";
import { SEO } from "@organisms/meta/seo";
import { BodyClass } from "@helpers/BodyClass";
import Institutional from "@organisms/page";

const Pageinstitutional: React.FC = () => {
  const router = useRouter();
  if (router.isFallback) return <div className="loading">Carregando...</div>;
  const bodyClass = BodyClass({ isHome: false });
  const { seo } = settings;

  return (
    <>
      <SEO {...{ title: seo.title, description: seo.description }} />
      <DefaultTemplate {...{ bodyClass, id: "about", header: true, footer: true }}>
        <Institutional title="Termos de Uso" />
      </DefaultTemplate>
    </>
  );
};

export default Pageinstitutional;
