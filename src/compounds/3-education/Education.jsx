import { useEffect, useRef } from "react";
import "./education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
function Education() {
  const EducationSection = useRef();
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
      window.scrollY >= EducationSection.current.offsetTop - 500 &&
      window.scrollY < EducationSection.current.offsetTop + 500
    ) {
      // @ts-ignore
      headerSection.current.style.letterSpacing = "10px";
    } else {
      // @ts-ignore;
      // @ts-ignore
      headerSection.current.style.letterSpacing = "5px";
    }
  };
  return (
    <>
      <h2 className="intro" ref={headerSection} style={{ width: "400" }}>
        {" "}
        Education&courses
      </h2>
      <section className="education" ref={EducationSection}>
        <div className="holdimg">
          <img src="/edu.jpg" alt="" />
        </div>
        <div className="edu">
          <p>
            <FontAwesomeIcon icon={faGraduationCap} />
            Software Testing | Digital Egypt Pioneers Initiative (DEPI) 2025
          </p>
          <p>
            <FontAwesomeIcon icon={faGraduationCap} />
            The Ultimate React Course 2024 (Udemy)
          </p>
          <p>
            <FontAwesomeIcon icon={faGraduationCap} />
            Bachelor of Science in Physics 2017 - 2021 with grade good
          </p>
        </div>
      </section>
    </>
  );
}

export default Education;
