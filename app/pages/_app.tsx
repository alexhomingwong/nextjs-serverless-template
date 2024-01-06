import { AppProps } from "next/app";
import "../styles/globals.css";

// Global template for pages
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
