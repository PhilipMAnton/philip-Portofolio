/* eslint-disable react/no-unescaped-entities */
import "./hero.css";
// @ts-ignore
import { easeOut, inView, motion, spring } from "framer-motion";
function Hero() {
  return (
    <section className="hero flex">
      <div className="left-section">
        <h1 className="title">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Hello,
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, margin: "5px" }}
            animate={{ opacity: 1, margin: "10px" }}
            transition={{
              opacity: { duration: 0.8, delay: 0.6, ease: "easeInOut" },
              margin: { duration: 0.6, delay: 2, ease: "easeInOut" },
            }}
            style={{ fontSize: "3.5rem" }}
            className="myName"
          >
            {" "}
            I'm Philip Maher
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1.2 }}
          >
            {" "}
            A software tester.
          </motion.span>
          <br />
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.8 }}
          className="sub-title"
        >
          {" "}
          From code to quality. My experience as a front-end developer gives me
          a unique perspective on testing, allowing me to anticipate potential
          issues and provide valuable insights into code quality and
          maintainability
        </motion.p>
        <motion.div
          className="all-icons flex"
          initial={{ opacity: 0, gap: 0 }}
          animate={{ opacity: 1, gap: "1.5rem" }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 1.5 }}
        >
          <a
            className="icon icon-whatsapp"
            href="HTTPS://wa.me/2001552899199"
          ></a>
          <a
            target="_blank"
            className="icon icon-social-linkedin"
            href="https://www.linkedin.com/in/philip-maher-b14060316/"
          ></a>
          <a
            target="_blank"
            className="icon icon-github"
            href="https://github.com/PhilipMAnton"
          ></a>
          <a
            target="_blank"
            className="icon icon-envelope"
            href="mailto:philipmaheer@gmail.com"
          ></a>
        </motion.div>
      </div>
      <motion.div
        className="parent-avater flex"
        initial={{ opacity: 0 }}
        animate={{ transform: "translateY(10px)", opacity: 1 }}
        transition={{
          opacity: { duration: 0.8, ease: "easeInOut" },
          transform: { type: "spring", stiffness: 300, damping: 5, delay: 0.2 },
        }}
      >
        <div className="image-border">
          <img src="/nobg.png" alt="" className="avater" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
