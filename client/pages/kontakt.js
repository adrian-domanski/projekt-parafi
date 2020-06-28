import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { StyledImg, SectionTitle } from "../styles/styled";
import { useQuery } from "@apollo/react-hooks";
import { getContactQuery } from "../queries";
import RenderHtml from "../components/RenderHtml";

const ContactPage = styled.div`
  max-width: ${({ theme }) => theme.smallerPage};
`;

const ContactContent = styled.div`
  font-size: 1.1rem;
  text-align: center;

  ${({ theme }) => theme.media.desktop} {
    font-size: 1.2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }

  h1::before {
    display: none;
  }
`;

const Contact = () => {
  const { data, loading } = useQuery(getContactQuery);

  return (
    <Layout>
      <ContactPage className="container">
        <section className="section">
          <SectionTitle>Kontakt</SectionTitle>
          <StyledImg src="/img/book.jpg" alt="Pismo święte, biblia" />
          <ContactContent className="content">
            <RenderHtml
              loading={loading}
              content={!loading && data.contact.content}
            />
          </ContactContent>
        </section>
      </ContactPage>
    </Layout>
  );
};

export default Contact;
