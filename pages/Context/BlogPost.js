import { createContext, useContext, useEffect, useState } from "react";

const BlogContext = createContext();

export const StateBlogContext = ({ children }) => {
  const [name, setname] = useState("armaan");
  return <BlogContext.Provider>{children}</BlogContext.Provider>;
};
export const GlobalStateBlogContext = () => useContext(BlogContext);
