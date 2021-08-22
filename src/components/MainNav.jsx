import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.png";
import { mainNavData } from "../staticData/navOneData";
import { CgMenuGridR } from "react-icons/cg";
import { FiChevronDown } from "react-icons/fi";
import { useGlobalContext } from "../context";
import Button from "./Button";

const MainNav = () => {
  const { setPage, setIsSubmenuOpen, isSidemenuOpen, setSidemenuOpen } =
    useGlobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    setPage(page);
    setIsSubmenuOpen(true);
  };
  const handleNav = (e) => {
    if (e.target.classList.contains("main-item")) {
      setIsSubmenuOpen(false);
    }
  };
  const handleSidemenu = (e) => {
    if (!e.target.classList.contains("icon")) {
      setSidemenuOpen(false);
    }
  };
  return (
    <MainNavStyle onMouseOver={(handleNav, handleSidemenu)}>
      <div className="wrapper">
        <div className="logo" onMouseOver={handleNav}>
          <img src={Logo} alt="Daffodil" />
        </div>
        <div className="main">
          <ul className="main-item">
            {mainNavData.map((item, i) => {
              return <li onMouseOver={displaySubmenu}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="side" onMouseOver={() => setIsSubmenuOpen(false)}>
          <Button />

          <CgMenuGridR
            onMouseOver={() => setSidemenuOpen(true)}
            className="icon"
          />
        </div>
      </div>
    </MainNavStyle>
  );
};

export default MainNav;

const MainNavStyle = styled.div`
  .wrapper {
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
  }
  .logo {
    img {
      width: 190px;
    }
  }
  .main {
    ul {
      display: flex;
      flex-direction: row;
      gap: 2rem;

      li {
        list-style-type: none;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        transition: 350ms ease;

        &:hover {
          color: var(--text-color-1);
        }
      }
    }
  }

  .side {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    svg {
      font-size: 2rem;
    }
  }
`;
