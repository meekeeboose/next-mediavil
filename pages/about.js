import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <div class='card'>
        <div class='card-header'>
          <h2>About Us</h2>
        </div>
        <div class='card-body'>
          <h5 class='card-title'>Special title treatment</h5>
          <p class='card-text'>
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href='#' class='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default about;
