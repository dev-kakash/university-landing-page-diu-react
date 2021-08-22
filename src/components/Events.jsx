import React from "react";
import Header from "./Header";
import { eventData } from "../staticData/navOneData";
import ImageSection from "./ImageSection";
import styled from "styled-components";

const Events = () => {
  return (
    <EventStyle>
      <Header
        title="Recent Events"
        text="Life at Daffodil is very much eventful. Through a lot of meaningful and impactful events students get the opportunity to develop their skills and portfolio beyond the curriculam"
      />

      <div className="row event-wrapper">
        {eventData.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <ImageSection {...item} buttonText="Read More" />
            </div>
          );
        })}
      </div>
    </EventStyle>
  );
};

export default Events;

const EventStyle = styled.div`
  .event-wrapper {
    padding: 2rem 25rem;
    margin: 0 auto;
  }
  .image-wrapper {
    h6 {
      height: 40px;
      transition: 350ms ease all;
      cursor: pointer;
      &:hover {
        color: var(--text-color-1);
      }
    }
    p {
      height: 60px;
    }
  }
`;
