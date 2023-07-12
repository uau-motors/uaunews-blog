import { ReactFragment, FC, Fragment } from "react";

import Link from "next/link";
import { getLang, get } from "@utility/UseLang";
import { GhostSettings } from "@libs/ghost";

import { DocumentHead } from "@molecules/document-head";

import Header from "@organisms/header";
import Footer from "@organisms/footer";

interface LayoutProps {
  header: boolean;
  footer: boolean;
  children?: React.ReactNode;
  id: string;
  bodyClass: string;
  pageClass?: string;
}

const DefaultTemplate: FC<LayoutProps> = ({ header, footer, children, pageClass, id, bodyClass }): JSX.Element => {
  pageClass = pageClass || ``;

  return (
    <Fragment>
      <DocumentHead className={bodyClass} />
      <div className="site-wrapper">
        {header && <Header />}
        <main id={id} className={`site-main ${pageClass}`}>
          {children}
        </main>
        {footer && <Footer />}
      </div>
    </Fragment>
  );
};

export default DefaultTemplate;
