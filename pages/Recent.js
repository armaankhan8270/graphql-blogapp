import moment from "moment";
import React from "react";
import { GetRecentPost } from "../Server/Index";

const RecentPosts = ({ time, img, title, href }) => {
  // console.log(Recnt[0].featuredImage.url);
  return (
    <div className="bg-white shadow-md rounded-lg  m-4 flex-col flex ">
      <div className="l">
        <a
          href={href}
          class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class=" lg:w-32  m-2 h-1/2 rounded-lg shadow-md shadow-purple-600 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={img}
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p class="mb-3 text-xs text-gray-700 dark:text-gray-400">{time}</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default RecentPosts;

export async function getStaticProps() {
  const Recnt = (await GetRecentPost()) || [];
  return {
    props: { Recnt },
  };
}