import { Button } from "bootstrap";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { useGlobalContext } from "../context";

const SearchBar = () => {
  const { removeOver } = useGlobalContext();
  return (
    <SearchBarStyle onMouseOver={removeOver}>
      <div className="container mt-2">
        <Form.Group
          as={Row}
          className="mb-3 formStyle "
          controlId="formPlaintextPassword"
        >
          <Col sm="10">
            <Form.Control
              type="text"
              placeholder="Enhanced by Google"
              className="rounded-0"
            />
          </Col>
          <Form.Label column sm="1">
            <BiSearchAlt />
          </Form.Label>
        </Form.Group>
      </div>
    </SearchBarStyle>
  );
};

export default SearchBar;

const SearchBarStyle = styled.div`
  .col-form-label {
    background-color: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;
