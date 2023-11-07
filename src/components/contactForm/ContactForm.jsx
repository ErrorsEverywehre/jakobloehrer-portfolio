import emailjs from "@emailjs/browser";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import Button from "../../common/button/Button";
import "./ContactForm.scss";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const emailRegex = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );

  const submitForm = (e) => {
    e.preventDefault();

    // Validation logic
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.trim() || !email.match(emailRegex)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (!subject.trim()) {
      setSubjectError("Subject is required");
      isValid = false;
    } else {
      setSubjectError("");
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      // Your form submission logic here
      const templateParams = {
        to_name: "Jakob Löhrer", // Name of the recipient (you can customize this)
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
      };
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICEID, // Replace with your EmailJS service ID
          import.meta.env.VITE_EMAILJS_TEMPLATEID, // Replace with your EmailJS template ID
          templateParams,
          import.meta.env.VITE_EMAILJS_USERID // Replace with your EmailJS user ID
        )
        .then((result) => {
          console.log(result.text);
          setEmail("");
          setName("");
          setSubject("");
          setMessage("");
        })
        .catch((error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="contactForm">
      <div className="inputs-wrapper">
        <div className={`name-input input-wrapper ${nameError ? "error" : ""}`}>
          <div className="input-description">Name, Surname:</div>
          <input
            className="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <span className="error-message">{nameError}</span>}
        </div>
        <div
          className={`name-input input-wrapper ${emailError ? "error" : ""}`}
        >
          <div className="  input-description">Email:</div>
          <input
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          {emailError && <span className="error-message">{emailError}</span>}
        </div>
        <div
          className={`subject-input input-wrapper ${
            subjectError ? "error" : ""
          }`}
        >
          <div className="input-description">Subject:</div>
          <input
            className="subject-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {subjectError && (
            <span className="error-message">{subjectError}</span>
          )}
        </div>
        <div
          className={`message-input input-wrapper  ${
            messageError ? "error" : ""
          }`}
        >
          <div className="input-description">Message: </div>
          <div
            className={`message-wrapper ${
              messageError && "textboxError-wrapper"
            }`}
          >
            {messageError && (
              <span className="error-message">{messageError}</span>
            )}
            <textarea
              className="message-input"
              placeholder="Enter your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="button-wrapper">
          <Button onClick={submitForm} text="Send" icon={<AiOutlineSend />} />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
