import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Secondary = () => {
  const { pageName } = useGlobalContext();
  return <SecondaryStyle>{pageName}</SecondaryStyle>;
};

export default Secondary;

const SecondaryStyle = styled.div`
  height: 450px;
  width: 100%;
  background-color: red;
`;
