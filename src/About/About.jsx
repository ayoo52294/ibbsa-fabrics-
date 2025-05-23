import "./About.css";
import header from '../assets/pexels-asphotograpy-291738.jpg';
function About() {
  return (
    <>
      {/* <!-- About --> */}

      <section className="about" id="about">
        <div className="about-img">
          <img src={header} alt="" />
          <div className="about-overlay"></div>
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We design clothes that help you express yourself. Our work combines creativity, style, and attention to detail. Whether it’s custom-made or ready-to-wear, we create fashion that speaks for you.

          </p>
        </div>
      </section>
    </>
  );
}

export default About;
