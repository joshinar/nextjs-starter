import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import Articles from '../components/Articles';
export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Articles posts={posts}></Articles>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
