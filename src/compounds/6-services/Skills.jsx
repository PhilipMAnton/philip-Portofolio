import { useEffect, useRef } from "react";
import "./skills.css";
import Lottie from "lottie-react";
import Lamp from "../../animation/lamp.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faDesktop,
  faRobot,
  faScrewdriverWrench,
  faGaugeHigh,
  faBoxesStacked,
  faHandshakeAngle,
  faListCheck,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons"; // Import specific icons

function Services() {
  const SkillsSection = useRef();
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
      // @ts-ignore
      window.scrollY >= SkillsSection.current.offsetTop - 500 &&
      // @ts-ignore
      window.scrollY < SkillsSection.current.offsetTop + 500
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
      <h2 className="intro" ref={headerSection} id="services">
        {" "}
        Services
      </h2>
      <div className="skills-section" ref={SkillsSection}>
        <div className="skills-left-sec">
          <Lottie
            className="contact-anime"
            style={{ height: 400 }}
            animationData={Lamp}
          />
        </div>
        <div className="skills-right-sec">
          <div className="Services">
            <span>
              <FontAwesomeIcon icon={faDesktop} />
              Functional Testing
            </span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faRobot} />
              Automated Testing
            </span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faScrewdriverWrench} />
              Manual Testing
            </span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faGaugeHigh} />
              Performance Testing
            </span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faBoxesStacked} />
              API Testing
            </span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faHandshakeAngle} />
              Integration Testing
            </span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faListCheck} />
              Regressive Testing
            </span>
            <span>
              {" "}
              <FontAwesomeIcon icon={faPuzzlePiece} />
              Unit Testing
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
