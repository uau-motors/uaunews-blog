import { ReactFragment } from "react";
import Link from "next/link";
import { getLang, get } from "@utility/useLang";
import { GhostSettings } from "@libs/ghost";

import { DocumentHead } from "@molecules/document-head";

import Head from "next/head";
import Header from "@organisms/header";
import Footer from "@organisms/footer";

interface LayoutProps {
  settings: GhostSettings;
  header: boolean;
  footer: boolean;
  children: ReactFragment;
  theme: string;
  isHome?: boolean;
  previewPosts?: ReactFragment;
  id: string;
  bodyClass: string;
  pageClass?: string;
}

const Layout = ({
  settings,
  header,
  footer,
  children,
  isHome,
  previewPosts,
  pageClass,
  id,
  bodyClass
}: LayoutProps) => {
  pageClass = pageClass || ``;

  return (
    <>
      <DocumentHead className={bodyClass} />
      <div className="site-wrapper">
        {header && <Header {...{ settings }} />}
        <main id={id} className={`site-main ${pageClass}`}>
          SITE
        </main>
        {footer && <Footer />}
      </div>
    </>
  );
};

export default Layout;
