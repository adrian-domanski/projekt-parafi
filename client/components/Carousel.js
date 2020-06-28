import React from "react";
import Slider from "react-slick";
import Head from "next/head";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";
import { getPostsQuery } from "../queries";
import Loader from "./Loader";
import { getImageFormat } from "../helpers/helpers";

const StyledSlider = styled(Slider)`
  box-shadow: ${({ theme }) => theme.boxShadow};

  .slick-list {
    max-height: 80vh;
    height: 400px;
    ${({ theme }) => theme.media.desktop} {
      height: 550px;
    }
  }

  .slide {
    height: 100%;
  }

  .card {
    position: relative;
  }

  .card-content {
    bottom: 0;
    left: 0;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .card-content,
  .card-content h1 {
    text-shadow: 2px 2px 4px black;
  }

  figure img {
    height: 400px;
    ${({ theme }) => theme.media.desktop} {
      height: 550px;
    }
    display: block;
    max-height: 80vh;

    width: 100%;
    object-fit: cover;
  }
`;

const Carousel = ({ limit, start = 0 }) => {
  const { data, loading } = useQuery(getPostsQuery, {
    variables: { limit, start },
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
  };
  return (
    <>
      <Head>
        {/* Slick css */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <StyledSlider {...settings}>
        {loading ? (
          <Loader />
        ) : (
          data.posts.map((post) => (
            <div key={post.id} className="slide">
              <div className="card">
                <div className="card-image">
                  <figure>
                    <img
                      src={`${process.env.SERVER_URL}${
                        post.cover &&
                        getImageFormat(post.cover.formats, "large")
                      }`}
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h1 className="title has-text-light">{post.title}</h1>
                    <p className="subtitle has-text-light">{post.short}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </StyledSlider>
    </>
  );
};

export default Carousel;
