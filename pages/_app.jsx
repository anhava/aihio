import { useEffect } from 'react';
import '../public/css/style-s2.css';
import '../styles/custom.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.setAttribute('data-menu-collapse', 'lg');
  });

  return <Component {...pageProps} />;
}

export default MyApp;
