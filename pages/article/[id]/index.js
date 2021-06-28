import { useRouter } from 'next/router';
const index = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default index;

// export const getServerSideProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const post = await res.json();

//   return {
//     props: {
//       post,
//     },
//   };
// };

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();
  const ids = posts.map((post) => post.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};
