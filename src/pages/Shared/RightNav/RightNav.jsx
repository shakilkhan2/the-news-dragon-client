import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import bg from "../../../assets/bg.png";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";

const RightNav = () => {
  return (
    <div>
      <div className="mt-4">
        <h4>Login with</h4>
        <Button className="w-100 mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button className="w-100" variant="outline-dark">
          <FaGithub />
          Login with Github
        </Button>
      </div>
      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <Qzone />
      </div>
      <div><img src={bg} alt="" /></div>
    </div>
  );
};

export default RightNav;
