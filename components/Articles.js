import Article from './Article';
const Articles = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <Article post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Articles;
