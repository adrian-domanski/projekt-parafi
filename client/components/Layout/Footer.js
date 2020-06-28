import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Footer = styled.footer`
  font-size: 0.9rem;
  text-align: center;
  margin-top: auto;

  ${({ theme }) => theme.media.desktop} {
    text-align: left;
  }
`;

const FooterInfo = styled.div`
  background-color: #a0d6d6;
  padding: 2rem 0;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: 2rem;

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const LinkList = styled.ul`
  font-size: 1rem;
  line-height: 2;
`;

const FooterInfoH1 = styled.h1`
  color: #fff;
  text-shadow: ${({ theme }) => theme.textShadow};
`;

const Figure = styled.figure`
  color: #00a6a6;
  text-align: center;
  i {
    margin-bottom: 1rem;
    font-size: 10rem;
  }

  figcaption {
    font-size: 2rem;
    font-weight: 700;

    .subtitle,
    .title {
      color: #00a6a6;
    }

    .subtitle {
      font-size: 1.1rem;
    }
  }
`;

const ColumnCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainFooter = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: ${({ theme }) => theme.textShadow};

  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
  }
`;

const CmsLink = styled.a`
  right: 1rem;
  font-size: 1rem;
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 0.5rem;
  color: #e1e1e1;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  ${({ theme }) => theme.media.desktop} {
    margin-top: 0;
    width: auto;
    position: absolute;
  }
`;

const FooterCopy = styled.p`
  display: block;
  text-align: center;
  width: 100%;
`;

const PageFooter = () => {
  return (
    <Footer className="has-text-white">
      <FooterInfo>
        <div className="container section">
          <FooterGrid>
            <div className="grid-item">
              <FooterInfoH1 className="title is-size-5">
                Polecane katolickie strony internetowe
              </FooterInfoH1>

              <LinkList>
                <li>
                  <a href="http://jasnagora.pl/" target="_blank">
                    jasnagora.pl
                  </a>
                </li>
                <li>
                  <a href="https://www.gosc.pl/" target="_blank">
                    gosc.pl
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.przewodnik-katolicki.pl/"
                    target="_blank"
                  >
                    przewodnik-katolicki.pl
                  </a>
                </li>
                <li>
                  <a href="https://www.niedziela.pl/" target="_blank">
                    niedziela.pl
                  </a>
                </li>
                <li>
                  <a href="https://caritaspoznan.pl/" target="_blank">
                    caritaspoznan.pl
                  </a>
                </li>
                <li>
                  <a href="http://archpoznan.pl/" target="_blank">
                    archpoznan.pl
                  </a>
                </li>
                <li>
                  <a href="https://episkopat.pl/" target="_blank">
                    episkopat.pl
                  </a>
                </li>
                <li>
                  <a href="http://rybacy.tv/" target="_blank">
                    rybacy.tv
                  </a>
                </li>
              </LinkList>
            </div>
            <div className="grid-item">
              <FooterInfoH1 className="title is-size-5">
                Informacje
              </FooterInfoH1>

              <LinkList>
                <li>
                  <Link href="/aktualnosci">
                    <a>Aktualności</a>
                  </Link>
                </li>
                <li>
                  <Link href="/galerie">
                    <a>Galerie zdjęć</a>
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt">
                    <a>Kontakt</a>
                  </Link>
                </li>
                <li>
                  <Link href="/ogloszenia-i-intencje">
                    <a>Ogłoszenia i intencje</a>
                  </Link>
                </li>
                <li>
                  <Link href="/rozklad-mszy">
                    <a>Rozkład mszy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/historia">
                    <a>Historia parafii</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pobierz">
                    <a>Do pobrania</a>
                  </Link>
                </li>
              </LinkList>
            </div>
            <ColumnCenter className="grid-item">
              <Figure>
                <i className="fas fa-church"></i>
                <figcaption>
                  <h1 className="title">Parafia Żabno</h1>
                  <p className="subtitle">pw. św. Jakuba Apostoła</p>
                </figcaption>
              </Figure>
            </ColumnCenter>
          </FooterGrid>
        </div>
      </FooterInfo>
      <MainFooter className="has-background-primary">
        <FooterCopy>
          &copy; Parafia Rzymskokatolicka w Żabnie pw. św. Jakuba Apostoła
        </FooterCopy>
        <CmsLink
          href="http://api.parafia.adrian-domanski.pl/admin"
          target="_blank"
        >
          <i className="fas fa-lock"></i>
        </CmsLink>
      </MainFooter>
    </Footer>
  );
};

export default PageFooter;
