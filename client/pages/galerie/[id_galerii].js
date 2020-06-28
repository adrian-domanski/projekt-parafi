import React from "react";
import "react-image-gallery/styles/scss/image-gallery.scss";
import Layout from "../../components/Layout/Layout";
import { withRouter } from "next/router";
import { getGalleryDetails } from "../../queries";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../../components/Loader";
import My404 from "../../components/404";
import styled from "styled-components";
import RenderHtml from "../../components/RenderHtml";
import { SectionTitle } from "../../styles/styled";
import GalleryList from "../../components/Galleries/GalleryList";
import GalleryCarousel from "../../components/Galleries/GalleryCarousel";
import { formatDate } from "../../helpers/helpers";

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

const GalleryDetails = ({ router }) => {
  const { data, loading } = useQuery(getGalleryDetails, {
    variables: { galleryId: router.query.id_galerii },
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
                <SectionTitle>{data.gallery.title}</SectionTitle>
                <GalleryCarousel images={data && data.gallery.images} />
                <Content className="content">
                  <RenderHtml
                    loading={loading}
                    content={!loading && data.gallery.content}
                  />
                  <p className="has-text-grey-light is-italic has-text-right">
                    {formatDate(data.gallery.date)}
                  </p>
                </Content>
              </>
            ) : (
              <My404 />
            )}
          </Wrapper>
          <section className="container section">
            <H1 className="title has-text-centered other-posts-title">
              Najnowsze galerie
            </H1>
            <GalleryList start={0} limit={3} />
          </section>
        </>
      )}
    </Layout>
  );
};

export default withRouter(GalleryDetails);
