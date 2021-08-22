import React from "react";
import styled from "styled-components";
import { footerData } from "../staticData/navOneData";
import Subscription from "./Subscription";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-wrapper">
        <div className="row">
          <div className="col-9">
            <div className="row ">
              {footerData.map((title, index) => {
                return (
                  <div className="col-4  title-wrapper" key={index}>
                    <h3>{title.name}</h3>
                    <div className="item-wrapper">
                      {title.items.map((listItem, index) => {
                        return <p key={index}>→ {listItem}</p>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3 sub-wrapper">
            <Subscription />
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const FooterStyle = styled.div`
  background-color: var(--clr-primary-4);
  color: white;
  .footer-wrapper {
    padding: 5rem 20rem;
  }
  h3 {
    font-size: 22px;
    margin-bottom: 2rem;
  }
  p {
    font-size: 14px;
    opacity: 80%;
    font-weight: 400;
    &:hover {
      opacity: 100%;
    }
  }
  .title-wrapper {
    padding-left: 5rem;
  }
  .item-wrapper {
    margin: 0;
    padding: 0;
    p {
      line-height: 0.5rem;
    }
  }
  .sub-wrapper {
    width: 242px;
  }
`;
