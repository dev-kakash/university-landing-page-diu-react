import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AlumniSection from "../components/AlumniSection";
import Events from "../components/Events";
import { FacultySection } from "../components/FacultySection";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Info from "../components/Info";
import MainNav from "../components/MainNav";

import SearchBar from "../components/SearchBar";
import ServiceSection from "../components/ServiceSection";
import SideMenu from "../components/SideMenu";
import SubMenu from "../components/SubMenu";
import { useGlobalContext } from "../context";

const Home = () => {
  return (
    <HomeWrapper>
      <SearchBar />
      <MainNav />
      <SubMenu />
      <SideMenu />
      <Hero />
      <Info />
      <ServiceSection />
      <FacultySection />
      <Events />
      <AlumniSection />
      <Gallery />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  overflow: hidden;
`;
