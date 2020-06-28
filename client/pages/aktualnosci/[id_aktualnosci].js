import React from "react";
import Layout from "../../components/Layout/Layout";
import { withRouter } from "next/router";
import { getPostDetails } from "../../queries";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../../components/Loader";
import My404 from "../../components/404";
import styled from "styled-components";
import RenderHtml from "../../components/RenderHtml";
import { StyledImg, SectionTitle } from "../../styles/styled";
import PostsList from "../../components/Posts/PostsList";
import { formatDate } from "../../helpers/helpers";

const StyledFigure = styled.figure`
  max-height: 500px;

  img {
    object-fit: cover;
    width: 100%;
    max-height: 500px;
  }
`;

const H1 = styled.h1`
  margin: 3rem 0;
`;

const Content = styled.div`
  line-height: 2;
  text-align: justify;
`;

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.smallerPage};
`;

const PostDetails = ({ router }) => {
  const { data, loading } = useQuery(getPostDetails, {
    variables: { postId: router.query.id_aktualnosci },
  });

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Wrapper className="container section">
            {data ? (
              <>
                <SectionTitle>{data.post.title}</SectionTitle>
                <StyledFigure className="image">
                  <StyledImg
                    src={`${process.env.SERVER_URL}${data.post.cover.formats.medium.url}`}
                    alt={data.post.title}
                  />
                </StyledFigure>

                <Content className="content">
                  <RenderHtml
                    loading={loading}
                    content={!loading && data.post.content}
                  />
                  <p className="has-text-grey-light is-italic has-text-right">
                    {formatDate(data.post.date)}
                  </p>
                </Content>
              </>
            ) : (
              <My404 />
            )}
          </Wrapper>
          <section className="container section">
            <H1 className="title has-text-centered other-posts-title">
              Najnowsze aktualności
            </H1>
            <PostsList start={0} limit={3} />
          </section>
        </>
      )}
    </Layout>
  );
};

export default withRouter(PostDetails);
