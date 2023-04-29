import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { BiBookmark, BiShareAlt } from "react-icons/bi";
import { BsEyeFill, BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, rating, image_url, author, total_view } = news;

  return (
    <Card className="mb-4 mt-4">
      <Card.Header className="d-flex align-items-center">
        <div>
          <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        </div>
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>{moment(author?.publish_date).format("YYYY-MM-DD")}</p>
        </div>
        <div>
          <BiBookmark />
          <BiShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link
                className="text-decoration-none text-warning"
                to={`/news/${_id}`}
              >
                Read More
              </Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex ">
        <div className="flex-grow-1  ">
          <Rating className="text-warning me-2"
              placeholderRating={rating.number}
              readonly
              emptySymbol={<BsStar/>}
              placeholderSymbol={<BsStarFill/>}
              fullSymbol={<BsStarFill/>}
          />
          {rating.number}
        </div>
        
        <div className="d-flex align-items-center">
          <BsEyeFill />
          <span className="ms-2">{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
