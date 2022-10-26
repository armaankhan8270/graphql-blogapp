import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Blogs from "../../Components/Blogs";
import { GetPostBySlug, getPosts } from "../../Server/Index";

export const getStaticPaths = async () => {
  const posts = (await getPosts()) || [];
  const paths = posts.map((Blogs) => {
    return {
      params: {
        post: Blogs.node.slug,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
const Post = ({ poost }) => {
  const [SlugParams, setSlugParams] = useState([]);
  const router = useRouter();
  const post = router.query.post;
  console.log(poost.author);
  const Data = poost;
  console.log(Data);
  // const getBySlugs = GetPostBySlug("web-dev");
  // console.log(getBySlugs);

  return (
    <div>
      <div className="text-center font-serif uppercase p-3 text-3xl ">
        Title : {post}
      </div>
      <div className="shadow-lg drop-shadow-xl shadow-blue-gray-700 bg-gray-100 p-2 rounded-xl m lg:mx-32 lg:px-44">
        <Blogs
          title={poost.slug}
          name={poost.author.name}
          excerpt={poost.excerpt}
          time={poost.createdAt}
          bio={poost.author.bio}
          slug={poost.slug}
          img={poost.featuredImage.url}
          key={poost.title}
          contetnt={poost.contetnt.raw.children.children}
        />
      </div>
    </div>
  );
};

export default Post;
export async function getStaticProps({ params }) {
  const posts = (await getPosts()) || [];
  const getBySlug = (await GetPostBySlug(params.post)) || [];
  return {
    props: { poost: getBySlug },
  };
}
