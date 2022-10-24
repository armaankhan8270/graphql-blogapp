import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
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
  const [SlugParams, setSlugParams] = useState("");
  const router = useRouter();
  const post = router.query.post;
  useEffect(() => {
    setSlugParams(post);
  }, []);
  console.log(poost);

  return <p>Post: {post}</p>;
};

export default Post;
export async function getStaticProps({ params }) {
  // const [SlugParams, setSlugParams] = useState("");
  // const router = useRouter();
  // const post = router.query.post;
  // useEffect(() => {
  //   setSlugParams(post);
  // }, []);
  console.log(params);
  const getBySlug = (await GetPostBySlug("web-dev")) || [];
  return {
    props: { poost: getBySlug },
    // props: { Recnt },
  };
  // return {
  // };
}

// import { useRouter } from "next/router";

// const Post = () => {
//   const router = useRouter();
//   const pid = router.query.slug;
//   //   console.log(router.query.slug);

//   return <p>Post: {pid}</p>;
// };

// export default Post;
