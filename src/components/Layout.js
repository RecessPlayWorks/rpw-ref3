import React from 'react';
import { Global, css } from '@emotion/core';
import useSiteMetadata from '../hooks/use-site-metadata';
import Helmet from 'react-helmet';/*Here is where we set our SEO */
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Global
        styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        /* More info: https://bit.ly/2PsCnzk */
        * + * {
          // margin-top: 1rem;
        }
        html {
          font-size: 62.5%;
        }
        html,
        body {
          background: #bbb;
          margin: 0;
          color: #222;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 1.6rem;
          line-height: 1.4;

          /* remove margin for the main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }
        }
        

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #fff;
          line-height: 1.1;
          + * {
            margin-top: 0.5rem;
          }
        }
      `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name={title} description={description} />
      </Helmet>
      <Header />
      <div className="layout-grid">
      <main>
        {children}
      </main>
      <Footer />
      </div>
    </>
  );
}

export default Layout;