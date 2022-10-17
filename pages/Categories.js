import React from "react";

const Categories = ({ title, href }) => {
  return (
    <div className="bg-white lg:py-4  lg:px-4 w-64 rounded-sm  items-center border-b-2 border-teal-400 shadow-md ">
      <a href={href}>
        <h1 className="text-sm font-sans ">{title}</h1>
      </a>
    </div>
  );
};

export default Categories;
