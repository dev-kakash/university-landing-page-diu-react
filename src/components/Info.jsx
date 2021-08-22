import React from "react";
import styled from "styled-components";
import { infoData } from "../staticData/navOneData";

const Info = () => {
  return (
    <InfoStyle>
      <div className="row">
        {infoData.map((item, index) => {
          return (
            <div className="col-3 every-item">
              <img src={item.icon} alt={item.name} className="svg-white" />
              <h4>{item.name}</h4>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </InfoStyle>
  );
};

export default Info;

const InfoStyle = styled.div`
  text-align: center;
  .every-item {
    padding: 5rem 2rem;
    color: white;
    img {
      width: 3.5rem;
    }

    p {
      font-size: 1rem;
      margin-top: 1rem;
    }
    h4 {
      margin-top: 2rem;
    }
    .svg-white {
      filter: invert(100%) sepia(0%) saturate(7443%) hue-rotate(198deg)
        brightness(126%) contrast(112%);
    }
  }
  .every-item:nth-child(even) {
    background-color: #2e3094;
  }
  .every-item:nth-child(odd) {
    background-color: #0e1229;
  }
`;
