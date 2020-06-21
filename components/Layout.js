import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Mediavil</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.5.0/cerulean/bootstrap.min.css'
          integrity='sha256-eMIQtojewNHneFWVpBljYTgfjcw2C2l2UVtitX5J/M4='
          crossorigin='anonymous'
        />
      </Head>
      <Navbar />
      <div className='container'>
        {props.children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
