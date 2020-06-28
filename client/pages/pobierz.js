import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { getDownloadsQuery } from "../queries";
import Loader from "../components/Loader";
import { SectionTitle as DefaultSectionTitle } from "../styles/styled";

const DownloadPage = styled.div`
  text-align: center;
  max-width: ${({ theme }) => theme.smallerPage};

  ul > li {
    margin-bottom: 1rem;
  }
`;

const SectionTitle = styled(DefaultSectionTitle)`
  padding-left: 0;
  :before {
    display: none;
  }
`;

const Header = styled.div`
  justify-content: center;
`;

const Download = () => {
  const { data, loading } = useQuery(getDownloadsQuery);

  return (
    <Layout>
      <DownloadPage className="container section">
        <SectionTitle>Pliki do pobrania</SectionTitle>
        {loading ? (
          <Loader />
        ) : data.downloads.length ? (
          data.downloads.map((download, index) => (
            <article key={index} className="message is-info">
              <Header className="message-header">{download.title}</Header>
              <div className="message-body">
                <ul>
                  {download.files.map((file, index) => (
                    <li key={index}>
                      <a
                        className="is-link has-text-weight-bold"
                        href={`${process.env.SERVER_URL}${file.url}`}
                      >
                        {file.name}
                        {file.ext}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))
        ) : (
          <h1>Brak plików do pobrania</h1>
        )}
      </DownloadPage>
    </Layout>
  );
};

export default Download;
