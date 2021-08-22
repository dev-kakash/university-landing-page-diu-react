import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { navOneItem } from "../staticData/navOneData";

const NavOne = () => {
  return (
    <NavOneStyles>
      <ul>
        {navOneItem.map((item, index) => (
          <NavLink to={`/${index}`} key={item} activeClassName="active">
            <li>{item}</li>
          </NavLink>
        ))}
      </ul>
    </NavOneStyles>
  );
};

export default NavOne;

const NavOneStyles = styled.div`
  height: 2rem;
  background-color: var(--clr-primary-1);

  ul {
    height: 100%;
    width: fit-content;
    display: flex;
    margin-left: auto;
    margin-right: 3rem;
    align-items: center;
    a {
      text-decoration: none;
      color: white;

      li {
        list-style-type: none;
        text-transform: uppercase;
        padding-left: 1rem;
        font-size: 0.65rem;
        font-weight: 700;
        transition: 350ms ease all;
      }
      &:hover {
        color: var(--text-color-1);
      }
    }
  }
  .active {
    color: var(--text-color-1);
  }
`;
