export default function Contact() {
  return (
    <div>
      <p>Feel free to send constructive criticism my way.</p>
      <div className="form-container">
        <form action="">
          <label htmlFor="contact-form-name">Name</label> <br />
          <input type="text" id="contact-form-name" placeholder="Your Name" />
          <br />
          <label htmlFor="contact-form-email">Email</label>
          <br />
          <input
            type="email"
            id="contact-form-email"
            placeholder="Your Email"
          />
          <br />
          <label htmlFor="contact-form-message">Message*</label>
          <br />
          <textarea
            name="contact-form-message"
            id="contact-form-message"
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <br />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}
