import ImageGallery from "react-image-gallery";
import { getImageFormat } from "../../helpers/helpers";
import styled from "styled-components";

const StyledImageGalleryWrapper = styled.div`
  .image-gallery-content:not(.fullscreen) {
    overflow: hidden;
    img.image-gallery-image {
      object-fit: cover;
    }

    margin-bottom: 2rem;
  }
`;

const GalleryCarousel = ({ images }) => {
  const galleryImages = images.map((image) => {
    return {
      original: `${process.env.SERVER_URL}${getImageFormat(
        image.formats,
        "large"
      )}`,
      thumbnail: `${process.env.SERVER_URL}${image.formats.thumbnail.url}`,
    };
  });

  return (
    <StyledImageGalleryWrapper>
      <ImageGallery items={galleryImages} />
    </StyledImageGalleryWrapper>
  );
};

export default GalleryCarousel;
