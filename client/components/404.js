import React from "react";
import styled from "styled-components";
import Link from "next/link";

const ContentCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin-bottom: 2rem;
  }

  button {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const Warning = styled.i`
  font-size: 10rem;
  margin-bottom: 2rem;

  color: ${({ theme }) => theme.colors.darkOrange};
  text-shadow: ${({ theme }) => theme.textShadow};
`;

const My404 = () => {
  return (
    <ContentCenter className="container section">
      <h1 className="title has-text-grey-dark">Strona nie istnieje</h1>
      <p>
        <Warning className="fas fa-exclamation-triangle" />
      </p>
      <Link href="/">
        <button className="button is-primary is-medium">Strona główna</button>
      </Link>
    </ContentCenter>
  );
};

export default My404;
