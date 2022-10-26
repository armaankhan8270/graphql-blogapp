import LayOut from "../Components/LayOut";
import "../styles/globals.css";
import image from "../public/pexels-photo-6347919.webp";

function MyApp({ Component, pageProps }) {
  return (
    <LayOut
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Component {...pageProps} />
      <style>{`
  body {
    background: ${"whitesmoke"};
    font-family: 
    Montserrat, sans-serif;
  }
`}</style>
    </LayOut>
  );
}

export default MyApp;
