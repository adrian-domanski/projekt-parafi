import React from "react";
import Layout from "../components/Layout/Layout";
import { SectionTitle } from "../styles/styled";
import { useQuery } from "@apollo/react-hooks";
import { getHistoryQuery } from "../queries";
import RenderHtml from "../components/RenderHtml";
import styled from "styled-components";

const HistoryPage = styled.div`
  max-width: ${({ theme }) => theme.smallerPage};
  text-align: justify;

  figure {
    margin: 0;
  }
`;

const History = () => {
  const { data, loading } = useQuery(getHistoryQuery);
  return (
    <Layout>
      <HistoryPage className="container section">
        <SectionTitle>Historia Parafii</SectionTitle>
        <div className="content">
          <RenderHtml
            loading={loading}
            content={!loading && data.history.content}
          />
        </div>
      </HistoryPage>
    </Layout>
  );
};

export default History;
