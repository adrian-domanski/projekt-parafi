import Layout from "../components/Layout/Layout";
import Carousel from "../components/Carousel";
import styled from "styled-components";
import Link from "next/link";
import { SectionTitle } from "../styles/styled";
import PostsList from "../components/Posts/PostsList";
import GalleryList from "../components/Galleries/GalleryList";
import ImportantInformations from "../components/ImportantInformations";

const CarouselWrapper = styled.div`
  max-width: 100vw;
`;

const SectionCenter = styled.div`
  button {
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadow};
    font-size: 1.2rem;

    ${({ theme }) => theme.media.desktop} {
      font-size: 1.5rem;
    }

    :not(:last-child) {
      margin-bottom: 1rem;
    }
  }
  ${({ theme }) => theme.media.desktop} {
    display: flex;
    justify-content: space-around;
    margin: 2rem 0 1rem;

    button {
      width: 33%;
      margin-bottom: 0;
    }
  }
`;

const Index = () => {
  return (
    <Layout>
      <div className="container is-paddingless">
        <CarouselWrapper className="section">
          <Carousel limit={6} />
        </CarouselWrapper>

        <SectionCenter className="section">
          <Link href="/ogloszenia-i-intencje">
            <button className="button is-primary is-radiusless">
              Ogłoszenia i Intencje
            </button>
          </Link>
          <Link href="/rozklad-mszy">
            <button className="button is-primary is-radiusless">
              Rozkład Mszy
            </button>
          </Link>
        </SectionCenter>

        <ImportantInformations sectionTitle="Ważne informacje" />
        {/* Posts */}
        <PostsList limit={6} sectionTitle="Aktualności" />
        {/* Galleries */}
        <GalleryList sectionTitle="Galerie" />
      </div>
    </Layout>
  );
};

export default Index;
