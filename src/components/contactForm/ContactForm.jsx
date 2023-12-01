import emailjs from "@emailjs/browser";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSend } from "react-icons/ai";
import Button from "../../common/button/Button";
import "./ContactForm.scss";

const ContactForm = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const emailRegex = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );

  const submitForm = (e) => {
    e.preventDefault();

    // Validation logic
    let isValid = true;

    if (!name.trim()) {
      setNameError("NAME_REQUIRED");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.trim() || !email.match(emailRegex)) {
      setEmailError("INVALID_EMAIL");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (!subject.trim()) {
      setSubjectError("SUBJECT_REQUIRED");
      isValid = false;
    } else {
      setSubjectError("");
    }

    if (!message.trim()) {
      setMessageError("MESSAGE_REQUIRED");
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

        setTimeout(() => {
          setFormSubmitted(true);
        }, 3000);
    }
  };

  return (
    <div className="contactForm">
           {formSubmitted ? (
        <p>Thank you for your submission!</p>
      ) : (
      <div className="inputs-wrapper">
        <div className={`name-input input-wrapper ${nameError ? "error" : ""}`}>
          <div className="input-description">{t("NAME_SURNAME")}:</div>
          <input
            className="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <span className="error-message">{t(nameError)}</span>}
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
          {emailError && <span className="error-message">{t(emailError)}</span>}
        </div>
        <div
          className={`subject-input input-wrapper ${
            subjectError ? "error" : ""
          }`}
        >
          <div className="input-description">{t("SUBJECT")}:</div>
          <input
            className="subject-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          {subjectError && (
            <span className="error-message">{t(subjectError)}</span>
          )}
        </div>
        <div
          className={`message-input input-wrapper  ${
            messageError ? "error" : ""
          }`}
        >
          <div className="input-description">{t("MESSAGE")}: </div>
          <div
            className={`message-wrapper ${
              messageError && "textboxError-wrapper"
            }`}
          >
            {messageError && (
              <span className="error-message">{t(messageError)}</span>
            )}
            <textarea
              className="message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="button-wrapper">
          <Button onClick={submitForm} text="SEND" icon={<AiOutlineSend />} />
        </div>
      </div> )}
    </div>
  );
};

export default ContactForm;
