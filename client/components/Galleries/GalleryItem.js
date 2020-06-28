import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { getImageFormat } from "../../helpers/helpers";

const GalleryImg = styled.img`
  object-fit: cover;
`;

const StyledGalleryItem = styled.a`
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

const GalleryItem = ({ gallery, className }) => {
  return (
    <Link href="/galerie/[id_galerii]" as={`/galerie/${gallery.id}`}>
      <StyledGalleryItem className={`${className}`}>
        <Card className="card">
          <div className="card-image">
            <figure className="image is-4by3">
              <GalleryImg
                src={`${process.env.SERVER_URL}${getImageFormat(
                  gallery.images[0].formats,
                  "small"
                )}`}
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="content">
              <h1 className="title is-size-4">{gallery.title}</h1>
              <p>{gallery.short}</p>
            </div>
          </div>
        </Card>
      </StyledGalleryItem>
    </Link>
  );
};

export default GalleryItem;
