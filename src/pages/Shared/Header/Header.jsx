import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import NavigationBar from "../NavigationBar/NavigationBar";

const Header = () => {

const {user} = useContext(AuthContext)

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
            <span>Breaking News...!</span>
          </h4>
        </Marquee>
      </div>
      <NavigationBar/>
    </Container>
  );
};

export default Header;
