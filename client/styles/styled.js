import styled from "styled-components";

export const SectionTitle = styled.h1`
  font-size: 1.5rem;
  position: relative;
  padding-left: 15px;
  margin-bottom: 2rem;

  ${({ theme }) => theme.media.desktop} {
    font-size: 1.8rem;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 8px;
    display: block;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledImg = styled.img`
  max-height: 400px;
  width: 100%;
  margin-bottom: 2rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  object-fit: cover;
`;
