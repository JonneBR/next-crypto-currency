import { useState } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  switch (Component.name) {
    case 'Login':
      return <Component {...pageProps} />;
    default:
      return (
        <Layout>
          <Component {...pageProps} />{' '}
        </Layout>
      );
  }
}

export default MyApp;
