import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftSideCards from "../../News/LeftSideCards/LeftSideCards";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className=" mt-4">
      <h4>All Categories</h4>
      <div className="ps-4 ">
        {categories.map((category) => (
          <p key={category.id}>
            {" "}
            <Link
              to={`/category/${category.id}`}
              className="text-decoration-none text-black"
            >
              {category.name}
            </Link>{" "}
          </p>
        ))}
      </div>
      <div>
        <LeftSideCards/>
      </div>
    </div>
  );
};

export default LeftNav;
