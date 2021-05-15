import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ae1m9o1",
        "techfy_mail",
        e.target,
        "user_Ocn3LYaGAv96zRaIysM2q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div id="contact">
        <div className="contact-wrapper">
          <h2 id="contact-label"> Get In Touch</h2>
          <form id="contact-form" onSubmit={sendEmail}>
            <a name="contact" />
            <label>Name</label>
            <input className="input-field" type="text" name="name" />
            <label>Subject</label>
            <input className="input-field" type="text" name="subject" />
            <label>Email</label>
            <input className="input-field" type="text" name="email" />
            <label>Message</label>
            <textarea
              className="input-field"
              name="message"
              defaultValue={""}
            />
            <input id="submit-btn" type="submit" Value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
