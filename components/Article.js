import styles from '../styles/Article.module.css';
import Link from 'next/link';
const Article = ({ post }) => {
  return (
    <div className={styles.card}>
      <h1>{post.title}</h1>
      <Link href='/article/[id]' as={`/article/${post.id}`}>
        <a>View Post</a>
      </Link>
    </div>
  );
};

export default Article;
