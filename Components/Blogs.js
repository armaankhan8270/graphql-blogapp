import React from "react";
import moment from "moment";

const Blogs = ({ title, slug, name, bio, excerpt, img, time }) => {
  //   console.log(post?.node + "aa");
  return (
    <div className="flex lg:w-full gap-3 lg:gap-14">
      <div class="max-w-2xl my-3  lg:my-12 lg:p-8 w-[80%] shadow-transparent overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img
          class="object-cover p-12 w-full h-64 shadow-teal-500 shadow-md"
          src={img}
          alt="Article"
        />

        <div class="p-6">
          <div>
            <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              <a
                href={`/post/${slug}`}
                class="block mt-2  font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
                tabindex="0"
                role="link"
              >
                {slug}
              </a>
              {/* {title} */}
            </span>
            <h1
              href={`/post/${slug}`}
              class="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 "
              tabindex="0"
              role="link"
            >
              {slug}
            </h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {excerpt}
            </p>
          </div>

          <div class="mt-4">
            <div class="flex items-center">
              <div class="flex items-center">
                <img
                  class="object-cover  h-10 rounded-full"
                  src={img}
                  alt="Avatar"
                />
                <a
                  href={`/post/$`}
                  class="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  tabindex="0"
                  role="link"
                >
                  {name}
                  <p className="text-xs">{bio}</p>
                </a>
              </div>
              <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">
                {/* {time?.slice(0, 10)} */}
                {moment(time).format("MMM DD yyy")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

// <section class="bg-white dark:bg-gray-900">
//   <div class="container px-6 py-10 mx-auto">
//     <div class="flex items-center justify-between">
//       <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
//         recent posts{" "}
//       </h1>

//       <button class="focus:outline-none">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           class="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             stroke-width="2"
//             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//           />
//         </svg>
//       </button>
//     </div>

//     <hr class="my-8 border-gray-200 dark:border-gray-700" />

//     <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

//       <div>
//         <img
//           class="object-cover object-center w-full h-64 rounded-lg lg:h-80"
//           alt=""
//           src={img}
//         />

//         <div class="mt-8">
//           <span class="text-blue-500 uppercase">{name}</span>

//           <h1 class="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
//             {title}
//           </h1>

//           <p class="mt-2 text-gray-500 dark:text-gray-400">{excerpt}</p>

//           <div class="flex items-center justify-between mt-4">
//             <div>
//               <a
//                 href="#"
//                 class="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
//               >
//                 {bio}
//               </a>

//               <p class="text-sm text-gray-500 dark:text-gray-400">
//                 {time?.slice(0, 10)}
//               </p>
//             </div>

//             <a
//               href="#"
//               class="inline-block text-blue-500 underline hover:text-blue-400"
//             >
//               Read more
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
