import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";

const GlobalStyles = createGlobalStyle`
body {
    background: url('/img/bg.png');
  }

  @media (min-width: 1024px) {
     .navbar-item.is-hoverable:hover .navbar-dropdown {
        display: block;
        }
    }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Parafia w Żabnie | św. Jakuba Apostoła</title>
      </Head>
      <GlobalStyles />
      <PageWrapper>
        <Navbar />
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </PageWrapper>
    </>
  );
};

export default Layout;
