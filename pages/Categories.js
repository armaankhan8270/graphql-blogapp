import Link from "next/link";
import React from "react";
import { GetPostBySlug } from "../Server/Index";

const Categories = ({ title, href }) => {
  return (
    <div className="bg-white lg:py-4  lg:px-4 w-64 rounded-sm  items-center border-b-2 border-purple-400 shadow-md ">
      <a to={`/post/${href}`}>
        <h1 className="text-sm font-sans ">{title}</h1>
      </a>
    </div>
  );
};

export default Categories;
