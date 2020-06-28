import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { getGalleriesQuery } from "../../queries";
import Loader from "../Loader";
import GalleryItem from "./GalleryItem";
import { SectionTitle } from "../../styles/styled";
import styled from "styled-components";

const GridSection = styled.section`
  margin-bottom: 1.5rem;
`;

const GalleryList = ({ sectionTitle, limit = 3, start = 0 }) => {
  const { data, loading } = useQuery(getGalleriesQuery, {
    variables: { limit, start },
  });

  return loading ? (
    <Loader />
  ) : data.galleries.length ? (
    <GridSection className={`${sectionTitle ? "section" : ""}`}>
      {sectionTitle ? <SectionTitle>{sectionTitle}</SectionTitle> : null}
      <div className="columns is-multiline">
        {data.galleries.map((gallery) => (
          <GalleryItem
            className="column is-4-desktop is-4-tablet"
            key={gallery.id}
            gallery={gallery}
          />
        ))}
      </div>
    </GridSection>
  ) : null;
};

export default GalleryList;
