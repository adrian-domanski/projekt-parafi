import React from "react";
import Layout from "../components/Layout/Layout";
import { useQuery } from "@apollo/react-hooks";
import { getGalleriesCountQuery } from "../queries";
import GalleryList from "../components/Galleries/GalleryList";
import { SectionTitle } from "../styles/styled";
import Pagination from "../components/Pagination";
import { withRouter } from "next/router";

const Galleries = ({ router }) => {
  const {
    data: getGalleriesCountData,
    loading: galleriesCountLoading,
  } = useQuery(getGalleriesCountQuery);

  const currentPage = Number(router.query.page || 1);

  return (
    <Layout>
      <div className="container section">
        <SectionTitle>Galerie</SectionTitle>
        <GalleryList limit={9} start={currentPage * 9 - 9} />
        <Pagination
          queryLoading={galleriesCountLoading}
          queryData={getGalleriesCountData}
          paginationPage="/galerie"
        />
      </div>
    </Layout>
  );
};

export default withRouter(Galleries);
