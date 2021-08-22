import React from "react";
import Header from "./Header";
import ImageSection from "./ImageSection";
import { facultyData } from "../staticData/navOneData";
import styled from "styled-components";

export const FacultySection = () => {
  return (
    <FacStyle>
      <Header
        title="Our Faculties"
        text="To help you build your career and accomplish your goal, we are offering 31 undergraduate and master's programs under 5 faculties."
      />
      <div className="row fac-wrapper">
        {facultyData.map((item, index) => {
          return (
            <div className="col-4">
              <ImageSection {...item} buttonText="Apply Now" />
            </div>
          );
        })}
      </div>
    </FacStyle>
  );
};

const FacStyle = styled.div`
  padding: 5rem 0;
  .fac-wrapper {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
  }
`;
