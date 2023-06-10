import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "@utility/contexts/theme-context";

interface DocumentHeadProps {
  className: string;
}

interface ClassProps {
  className: string;
}

interface AddThemeClassProps extends ClassProps {
  theme: string;
}

interface AddActionClassProps extends ClassProps {
  action?: string | string[];
  success?: string | string[];
}

const addThemeClass = ({ className, theme }: AddThemeClassProps) =>
  `${className} theme-${theme === `dark` ? "dark" : `light`}`;

const addActionClass = ({ className, action = `ssr`, success }: AddActionClassProps) => {
  if (!success || Array.isArray(action) || Array.isArray(success)) {
    return className;
  }
  return `${className} ${
    action === `subscribe` ? (success === `true` ? ` subscribe-success` : ` subscribe-failure`) : ``
  }`;
};

export const DocumentHead = ({ className }: DocumentHeadProps) => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const { action, success } = router.query;
  const cln = addActionClass({ className, action, success });

  const bodyClass = addThemeClass({ className: cln, theme });

  /**
   * Not declarative, but allows to get rid of Helmet which
   * 1. saves 5 KB in bundle size
   * 2. allows strict mode in next.config
   *
   */
  useEffect(() => {
    const body = document.querySelector("body");
    if (body) body.className = bodyClass;
  }, [bodyClass]);

  return null;
};
