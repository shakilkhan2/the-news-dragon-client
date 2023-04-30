import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Container>
      <div className="text-center mt-4">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM DD, YYYY ")}</p>
      </div>
      <div className="d-flex bg-black rounded-start">
        <Button variant="danger">Breaking News:</Button>
        <Marquee speed={150}>
          <h4 className="text-danger">
            {" "}
            <span>Bangladeshis in Sudan to be brought back via Jeddah: foreign ministry. || PM Hasina arrives in Washington DC</span> || 
            <span> DU entry tests begin with fine arts || FDIC prepares to place First Republic Bank under receivership</span> 
          </h4>
        </Marquee>
      </div>
      
    </Container>
  );
};

export default Header;
