"use client";
import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [errMessage, setErrMessage] = useState(null);
  const [messageSent, setMessageSent] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 3 || contactDetails.length < 3) {
      alert("פרטים חסרים");
      return;
    }
    emailjs
      .sendForm(
        "service_zb11coh",
        "template_m1i6mx9",
        formRef.current,
        "SWnTJ9GiYUh1LY7es"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      {!messageSent && (
        <form
          ref={formRef}
          id="contact-form"
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.control}>
            <div>
              <label>שם מלא</label>
              <input
                type="text"
                name="name"
                placeholder="הכנס שם"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div>
              <label>אימייל\מספר פלאפון</label>
              <input
                type="tel"
                name="contact"
                placeholder="הכנס מספר פלאפון או אימייל"
                onChange={(e) => setContactDetails(e.target.value)}
                value={contactDetails}
              />
            </div>
          </div>
          <div className={styles.content}>
            <label>תוכן הפנייה</label>
            <textarea
              type="text"
              name="message"
              placeholder="הכנס את תוכן הפנייה"
              onChange={(e) => setContent(e.target.value)}
              value={content}
            ></textarea>
          </div>
          {errMessage && <p className={styles.err}>{errMessage}</p>}
          <button>שלח</button>
        </form>
      )}
      {messageSent && (
        <div className={styles.form}>
          <h2>ההודעה נשלחה</h2>
        </div>
      )}
    </>
  );
};

export default ContactForm;
