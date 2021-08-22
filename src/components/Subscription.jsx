import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FiInstagram, FiMail, FiYoutube } from "react-icons/fi";

const Subscription = () => {
  return (
    <SubStyle>
      <h3>Subscribe Us!</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter  email address" />
          <button className="button">Subscribe</button>
        </Form.Group>
      </Form>
      <div className="social">
        <h3>Connect With Us</h3>
        <div className="row icon-wrapper">
          <div className="col-2">
            <FaFacebookF />
          </div>
          <div className="col-2">
            <FaTwitter />
          </div>
          <div className="col-2">
            <FiInstagram />
          </div>
          <div className="col-2">
            <FiYoutube />
          </div>
          <div className="col-2">
            <FaLinkedinIn />
          </div>
          <div className="col-2">
            <FaPinterest />
          </div>
          <div className="col-2">
            <FaWhatsappSquare />
          </div>
          <div className="col-2">
            <FiMail />
          </div>
        </div>
      </div>
    </SubStyle>
  );
};

export default Subscription;

const SubStyle = styled.div`
  h3 {
    font-size: 22px;
  }
  .form-control {
    border-radius: 0;
    width: 220px;
    height: 45px;
    background-color: var(--clr-primary-5);
    border: none;
    text-align: center;
    color: #ffffffe2;
    font-weight: 500;
    font-size: 16px;
  }
  .button {
    margin-top: 0.5rem;
    width: 220px;
    height: 45px;
    background-color: var(--clr-primary-3);
    border: none;
    color: white;
    font-weight: 500;
    font-size: 16px;
  }
  .social {
    margin-top: 3rem;

    h3 {
      margin-top: 2rem;
    }
  }
  .icon-wrapper {
    padding-left: 5px;
  }

  .icon-wrapper .col-2 {
    margin: 0.3rem;
    height: 35px;
    width: 35px;
    background-color: var(--clr-primary-5);
    position: relative;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    border-radius: 50%;
  }
`;
