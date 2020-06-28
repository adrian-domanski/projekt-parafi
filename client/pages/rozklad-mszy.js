import React from "react";
import Layout from "../components/Layout/Layout";
import styled from "styled-components";
import { SectionTitle, StyledImg } from "../styles/styled";
import { useQuery } from "@apollo/react-hooks";
import { getMassScheduleQuery } from "../queries";
import RenderHtml from "../components/RenderHtml";

const MassSchedulePage = styled.div`
  max-width: 800px;
`;

const Img = styled(StyledImg)`
  margin-bottom: 2rem;
`;

const MassScheduleContent = styled.div`
  text-align: center;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    font-size: 1.8rem;
  }

  font-size: 1.3rem;
`;

const StyledSectionTitle = styled(SectionTitle)`
  text-align: center;
  padding-left: 0;
  ::before {
    display: none;
  }
`;

const MassSchedule = () => {
  const { data, loading } = useQuery(getMassScheduleQuery);
  return (
    <Layout>
      <MassSchedulePage className="container section">
        <Img src="/img/church.jpg" alt="Wnętrze kościoła" />
        <StyledSectionTitle>Rozkład Mszy:</StyledSectionTitle>
        <section>
          <MassScheduleContent className="content">
            <RenderHtml
              loading={loading}
              content={!loading && data.massSchedule.content}
            />
          </MassScheduleContent>
        </section>
      </MassSchedulePage>
    </Layout>
  );
};

export default MassSchedule;
