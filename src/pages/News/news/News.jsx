import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Category from "../../Home/category/Category";
import { FaArrowLeft } from "react-icons/fa";
import EditorsInsights from "../EditorsInsights/EditorsInsights";

const News = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;
  return (
    <div>
      <h5 className="my-4">Dragon News</h5>
      <Card>
      <Card.Img className="p-3" variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="danger">
            <FaArrowLeft /> All news in this category
          </Button>
        </Link>
      </Card.Body>
    </Card>
    <EditorsInsights/>
    </div>
  );
};

export default News;
