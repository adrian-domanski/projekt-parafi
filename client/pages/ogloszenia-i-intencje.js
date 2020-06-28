import React from "react";
import Layout from "../components/Layout/Layout";
import { SectionTitle } from "../styles/styled";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { getAnnouncementsQuery, getIntentionsQuery } from "../queries";
import RenderHtml from "../components/RenderHtml";

const InformationsPage = styled.div`
  max-width: ${({ theme }) => theme.smallerPage};
`;

const StyledImg = styled.img`
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  object-fit: cover;
`;

const Informations = () => {
  const {
    data: getAnnouncementsData,
    loading: getAnnouncementsLoading,
  } = useQuery(getAnnouncementsQuery);

  const { data: getIntentionsData, loading: getIntentionsLoading } = useQuery(
    getIntentionsQuery
  );

  return (
    <Layout>
      <InformationsPage className="container">
        <section className="section">
          <SectionTitle>Ogłoszenia parafialne</SectionTitle>

          <StyledImg src="/img/bible.jpg" alt="Pismo święte" />
          <div className="content has-text-justified">
            <RenderHtml
              loading={getAnnouncementsLoading}
              content={
                !getAnnouncementsLoading &&
                getAnnouncementsData.announcement.content
              }
            />
          </div>
        </section>

        <section className="section">
          <SectionTitle>Intencje mszalne</SectionTitle>

          <StyledImg src="/img/schedule.jpg" alt="Pismo święte" />

          <div className="content has-text-justified">
            <RenderHtml
              loading={getIntentionsLoading}
              content={
                !getIntentionsLoading && getIntentionsData.intention.content
              }
            />
          </div>
        </section>
      </InformationsPage>
    </Layout>
  );
};

export default Informations;
