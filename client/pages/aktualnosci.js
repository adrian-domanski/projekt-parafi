import React from "react";
import Layout from "../components/Layout/Layout";
import { useQuery } from "@apollo/react-hooks";
import { getPostsCountQuery } from "../queries";
import PostsList from "../components/Posts/PostsList";
import { SectionTitle } from "../styles/styled";
import Pagination from "../components/Pagination";
import { withRouter } from "next/router";

const Posts = ({ router }) => {
  const { data: getPostsCountData, loading: postsCountLoading } = useQuery(
    getPostsCountQuery
  );

  const currentPage = Number(router.query.page || 1);

  return (
    <Layout>
      <div className="container section">
        <SectionTitle>Aktualności</SectionTitle>
        <PostsList limit={9} start={currentPage * 9 - 9} />
        <Pagination
          queryLoading={postsCountLoading}
          queryData={getPostsCountData}
          paginationPage="/aktualnosci"
        />
      </div>
    </Layout>
  );
};

export default withRouter(Posts);
