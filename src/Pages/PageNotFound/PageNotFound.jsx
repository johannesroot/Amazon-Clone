import Layout from '../../Components/Layout/Layout';
import styles from './PageNotFound.module.css'

function PageNotFound() {
  return (
   <Layout>
     <div className={styles.errorHolder}>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
   </Layout>
  );
}

export default PageNotFound;