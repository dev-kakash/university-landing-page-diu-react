import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { sidebarData } from "../staticData/navOneData";

const SideMenu = () => {
  const { isSidemenuOpen } = useGlobalContext();

  return (
    <SideMenuStyle>
      <aside className={`sidemenu ${isSidemenuOpen && "show"}`}>
        <div className="row">
          {sidebarData.map((item, index) => {
            return (
              <div className="col-4 item-style">
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </aside>
    </SideMenuStyle>
  );
};

export default SideMenu;

const SideMenuStyle = styled.div`
  .sidemenu {
    background-color: white;
    position: absolute;
    top: 10rem;
    right: 2rem;
    display: none;
    padding: 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    z-index: 5;

    transform: translateX(5%);
    transition: all 0.3s ease;
    background-color: #ffffff;
    width: 300px;

    .item-style {
      padding: 1rem 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:hover {
        color: var(--text-color-1);
      }
      &:hover img {
        fill: var(--text-color-1);
      }
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
  .show {
    display: block;
  }
`;
