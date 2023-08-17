import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { navLinks, navLinkItem, active, link } from "./layout.module.css";
import { Container } from "@mui/material";

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
    <div>
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
        <Container maxWidth={"md"}>
          <h2
            style={{
              marginBottom: "0px",
              marginTop: "0px",
              textAlign: "center",
            }}
          >
            {pageTitle}
          </h2>
          {children}
        </Container>
      </main>
    </div>
  );
};

export default Layout;
