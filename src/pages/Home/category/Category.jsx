import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();

  return (
    <div>
      {id && <h1>This is category:{categoryNews.length}</h1>}
      {categoryNews.map((news) => (
        <NewsCard key={categoryNews._id} news={news}></NewsCard>
      ))}
    </div>
  );
};

export default Category;
