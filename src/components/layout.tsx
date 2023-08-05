import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  navLinks,
  navLinkItem,
  active,
  link,
} from "./layout.module.css";

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={link} activeClassName={active} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={link} activeClassName={active} to="/blog">
              Blog
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={link} activeClassName={active} to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h2 style={{ marginBottom: "0px", marginTop: "0px" }}>{pageTitle}</h2>
        {children}
      </main>
    </div>
  );
};

export default Layout;
