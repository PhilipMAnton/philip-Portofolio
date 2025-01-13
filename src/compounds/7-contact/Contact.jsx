import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
// @ts-ignore
import doneAnimation from "../../animation/done.json";
// @ts-ignore
import contactAnimation from "../../animation/email.json";
import { useEffect, useRef } from "react";

function Contact() {
  const [state, handleSubmit] = useForm("mbjnepog");
  const ContactSection = useRef();
  const headerSection = useRef();
  useEffect(() => {
    window.addEventListener("scroll", handelscrolling);
    return () => {
      window.removeEventListener("scroll", handelscrolling);
    };
  }, []);
  const handelscrolling = () => {
    // @ts-ignore
    if (
      window.scrollY >= ContactSection.current.offsetTop - 500 &&
      window.scrollY < ContactSection.current.offsetTop + 500
    ) {
      // @ts-ignore
      headerSection.current.style.letterSpacing = "10px";
    } else {
      // @ts-ignore;
      // @ts-ignore
      headerSection.current.style.letterSpacing = "5px";
    }
  };
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }
  return (
    <section className="contact-us" id="contact" ref={ContactSection}>
      <pre>
        <h2 className="intro" ref={headerSection}>
          Contact Me
        </h2>
      </pre>
      <p className="sub-title" style={{ lineHeight: "50px" }}>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.56rem",
            color: "var(--title)",
          }}
        >
          Ready to take your software quality to the next level?
        </span>
        <br />
        <span style={{ marginLeft: "10px", fontSize: "1.29rem" }}>
          Let&apos;s discuss how I can help you achieve your goals.
        </span>
      </p>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit} action="" className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "15px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea name="message" id="message" required>
              {" "}
            </textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting....." : "submit"}
          </button>
          {state.succeeded && (
            <p
              style={{
                fontSize: "18px",
                marginTop: "1.7rem",
                flexDirection: "row-reverse",
              }}
              className="successMess flex"
            >
              <Lottie style={{ height: 55 }} animationData={doneAnimation} />
              Your message has been sent successfully
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie
            className="contact-anime"
            style={{ height: 400 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
