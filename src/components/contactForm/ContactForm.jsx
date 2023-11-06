import sendgrid from '@sendgrid/mail';
import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import Button from '../../common/button/Button';
import "./ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    // const resend = new Resend('re_QCDFRfA9_JT859ySaSFE7wVACV5eU5T6d');
    sendgrid.setApiKey(import.meta.env.SENDGRID_API_KEY);

    const options = {
      from: 'you@example.com',
      to: 'loehrer.jakob@gmail.com',
      subject: 'hello world',
      text: 'and easy to do anywhere, even with Node.js',
    };

    sendgrid.send(options)
      .then(() => console.log("Email sent successfully"))
      .catch((err) => console.error(err));

    // resend.sendEmail({
    //   from: 'you@example.com',
    //   to: 'loehrer.jakob@gmail.com',
    //   subject: 'hello world',
    //   text: "",
    // });
  }

  return (
    <div className="contactForm">
      <div className="inputs-wrapper">
        <div className="name-input input-wrapper">
          <div className="input-description">Name, Surname:</div>
          <input
            className="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="name-input input-wrapper">
          <div className="input-description">Email:</div>
          <input
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="name-input input-wrapper">
          <div className="input-description">Message: </div>
          <textarea
            className="message-input"
            placeholder="Enter your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className='button-wrapper'>
          <Button onClick={submitForm} text="Send" icon={<AiOutlineSend />} />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
