import '../src/app/globals.css'; // Import the global styles for Tailwind CSS

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />; // This renders the component for each page
}

export default MyApp;
