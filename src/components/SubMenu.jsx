import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { mainItemsDetails } from "../staticData/navOneData";

const SubMenu = () => {
  const { page, isSubmenuOpen, setPageName, pageName } = useGlobalContext();
  const newDetails = mainItemsDetails.filter((item, i) => item.page === page);

  const handleClick = (i) => {};

  return (
    <SubMenuStyle>
      <aside className={`submenu ${isSubmenuOpen && "show"}`}>
        <div className="submenuWrapper">
          {newDetails.map((item, i) => {
            return (
              <>
                {item.links.map((item, i) => {
                  return (
                    <>
                      <div className=" items ">
                        <h5>{item.name}</h5>
                        {item.items.map((i, index) => {
                          return (
                            <Link
                              to={{
                                pathname: `/${i}`,
                                pageName: `/${i}`,
                              }}
                            >
                              <p>{i}</p>
                            </Link>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
      </aside>
    </SubMenuStyle>
  );
};

export default SubMenu;

const SubMenuStyle = styled.div`
  a {
    text-decoration: none;
  }
  .submenu {
    background-color: white;
    position: absolute;
    top: 10.5rem;
    left: 10%;
    display: none;
    padding: 3rem 14rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    z-index: 5;

    transform: translateX(5%);
    transition: all 0.3s ease;
  }
  .show {
    display: block;
  }

  .submenuWrapper {
    display: flex;
    gap: 7rem;
  }

  .items {
    h5 {
      font-size: 18px;
      color: var(--text-color-1);
      font-weight: 700;
    }
    p {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 0.4rem;
      color: #333333;
      padding-right: 2rem;
      width: 100%;
      transition: 250ms ease;
      &:hover {
        color: var(--text-color-1);
      }
    }
  }
`;
