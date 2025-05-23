import "./Contact.css";
import header from '../assets/pexels-hngstrm-1233648.jpg'

function Contact() {
  return (
    <>
      {/* <!-- background img  --> */}
      <div className="background">
        <img src={header} alt="background image" />
      </div>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Reach out to us for inquiries, orders, or
          feedback.
        </p>
        <div className="contact-container">
          <form
            // action="https://formspree.io/f/xgvokegr"
            // method="POST"
            id="contact-form"
            className="contact-form"
          >
            <div className="input-group">
              <input
                type="text"
                id="fullName"
                name="name"
                autocomplete="off"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                id="email_id"
                name="email"
                autocomplete="off"
                placeholder="Your Email"
                required
              />
            </div>
            <textarea
              id="message"
              name="message"
              rows="5"
              autocomplete="off"
              placeholder="Your Message"
              required4
            ></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>

          <div className="contact-info">
            <p>
              <strong>Email:</strong> oketimmy@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +123-456-789-10112
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
