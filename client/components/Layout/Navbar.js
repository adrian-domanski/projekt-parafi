import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const NavbarBrand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

const NavbarLink = styled.a.attrs({ className: "navbar-item" })`
  font-size: 1rem;
  padding: 1.2rem 1rem;
  color: #fff;
  text-shadow: ${({ theme }) => theme.textShadow};

  @media screen and (min-width: 1100px) {
    font-size: 1.1rem;
  }
`;

const Nav = styled.nav`
  box-shadow: 0 2px 3px #00000050;

  @media screen and (max-width: 1024px) {
    .navbar-menu.is-active {
      .navbar-item.has-dropdown.is-hoverable,
      .navbar-dropdown {
        padding: 0;
      }

      background-color: #09a0a0;
      text-align: center;
      padding: 0;
      .navbar-item {
        color: #fff;
        text-shadow: ${({ theme }) => theme.textShadow};
        font-size: 1rem;
        padding: 1.2rem 1rem;
        :hover {
          color: #fff;
          background-color: unset;
        }
      }
    }
  }
`;

const LogoName = styled.h1`
  margin-left: 1rem;
  font-size: 1.3rem;
  letter-spacing: 1px;
  text-shadow: ${({ theme }) => theme.textShadow};

  @media screen and (min-width: 1100px) {
    font-size: 1.4rem;
  }
`;

const Logo = styled.i`
  font-size: 2rem;
  text-shadow: ${({ theme }) => theme.textShadow};
`;

const LogoLink = styled.a`
  display: flex;
  color: #fff;
  align-items: center;
  transition: color 0.1s ease-in-out;

  :hover {
    color: #f7f7f7;
  }
`;

const Navbar = () => {
  useEffect(() => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }, []);

  return (
    <Nav
      className="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <NavbarBrand className="navbar-brand">
        <Link href="/">
          <LogoLink className="has-text-white">
            <Logo className="fas fa-church"></Logo>
            <LogoName>Parafia Żabno</LogoName>
          </LogoLink>
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </NavbarBrand>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <Link href="/">
            <NavbarLink>Strona Główna</NavbarLink>
          </Link>

          <Link href="/rozklad-mszy">
            <NavbarLink>Rozkład Mszy</NavbarLink>
          </Link>

          <Link href="/aktualnosci">
            <NavbarLink>Aktualności</NavbarLink>
          </Link>

          <Link href="/ogloszenia-i-intencje">
            <NavbarLink>Ogłoszenia</NavbarLink>
          </Link>

          <Link href="/kontakt">
            <NavbarLink>Kontakt</NavbarLink>
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <NavbarLink className="navbar-link is-hidden-mobile">
              Pozostałe
            </NavbarLink>

            <div className="navbar-dropdown">
              <Link href="/galerie">
                <a className="navbar-item">Galerie</a>
              </Link>
              <Link href="/historia">
                <a className="navbar-item">Historia Parafii</a>
              </Link>
              <Link href="/pobierz">
                <a className="navbar-item">Do pobrania</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
