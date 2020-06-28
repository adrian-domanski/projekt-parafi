import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getPostsQuery } from "../../queries";
import Loader from "../Loader";
import PostItem from "./PostItem";
import { SectionTitle } from "../../styles/styled";
import styled from "styled-components";

const GridSection = styled.section`
  margin-bottom: 1.5rem;
`;

const PostsList = ({ sectionTitle, limit, start = 0 }) => {
  const { data, loading } = useQuery(getPostsQuery, {
    variables: { limit, start },
  });

  return loading ? (
    <Loader />
  ) : data.posts.length ? (
    <GridSection className={`${sectionTitle ? "section" : ""}`}>
      {sectionTitle ? <SectionTitle>{sectionTitle}</SectionTitle> : null}
      <div className="columns is-multiline">
        {data.posts.map((post) => (
          <PostItem
            className="column is-4-desktop is-6-tablet"
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </GridSection>
  ) : null;
};

export default PostsList;
