import React from "react";
import Header from "./Header";
import { serviceData } from "../staticData/navOneData";
import styled from "styled-components";
import Pic from "../images/section.png";

const ServiceSection = () => {
  return (
    <SectionStyle>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Header
              title="What We Offer"
              text="At Daffodil International University, students get the opportunity to think, learn and grow."
              className="headerC"
            />
            <div className="row main">
              {serviceData.map((item, index) => {
                const { image, title, desc } = item;
                return (
                  <div className="col-5 m-1" key={index}>
                    <div className="row secondary ">
                      <div className="col-2 icon">
                        <img src={image} alt={title} />
                      </div>
                      <div className="col-8 content">
                        <h6>{title}</h6>
                        <p>{desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-4 last">
            <img src={Pic} alt="" />
          </div>
        </div>
      </div>
    </SectionStyle>
  );
};

export default ServiceSection;

const SectionStyle = styled.div`
  .main .secondary {
    gap: 1rem;
  }
  .secondary {
    margin-left: 1rem;
  }
  .icon {
    background-color: var(--clr-primary-1);
    height: 80px;
    width: 80px;

    display: flex;
    justify-content: center;
    border-radius: 50%;
    img {
      width: 25px;
      filter: invert(100%) sepia(0%) saturate(7443%) hue-rotate(198deg)
        brightness(126%) contrast(112%);
    }
    svg {
      z-index: 100;
    }
  }
  .content {
    h6 {
      font-size: 22px;
      margin-bottom: 1rem;
    }
    p {
      font-size: 16px;
    }
  }
  .last {
    img {
      height: 100%;
      width: 95%;
    }
  }
`;
