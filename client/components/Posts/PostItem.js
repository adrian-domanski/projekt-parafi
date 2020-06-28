import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { getImageFormat } from "../../helpers/helpers";

const PostImg = styled.img`
  object-fit: cover;
`;

const StyledPostItem = styled.a`
  transition: transform 0.1s ease-in-out;
  display: flex;

  :hover {
    transform: scale(0.99);
    cursor: pointer;
  }
`;

const Card = styled.div`
  width: 100%;
`;

const PostItem = ({ post, className }) => {
  return (
    <Link href="/aktualnosci/[id_aktualnosci]" as={`/aktualnosci/${post.id}`}>
      <StyledPostItem className={`${className}`}>
        <Card className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <PostImg
                src={`${process.env.SERVER_URL}${getImageFormat(
                  post.cover.formats,
                  "small"
                )}`}
                alt={post.title}
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h1 className="title is-size-4">{post.title}</h1>
              <p>{post.short}</p>
            </div>
          </div>
        </Card>
      </StyledPostItem>
    </Link>
  );
};

export default PostItem;
