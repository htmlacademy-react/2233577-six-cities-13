import { Link } from 'react-router-dom';
import styles from './notFound-page.module.css';

function NotFoundPage(): JSX.Element {
  return(
    <div className={styles.notFoundPage}>
      <img className={styles.image} src="./public/img/3819740.jpg" alt="" />
      <Link className={styles.link} to='/'>Go back</Link>
    </div>
  );
}

export default NotFoundPage;