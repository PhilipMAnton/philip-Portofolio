import { useEffect } from "react";
import "./card.css";
import { useRef } from "react";
// @ts-ignore
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function Card(props) {
  const mentorSection = useRef();

  const headerSection = useRef();
  const handelscrolling = () => {
    // @ts-ignore
    if (
      // @ts-ignore
      window.scrollY >= mentorSection.current.offsetTop - 500 &&
      // @ts-ignore
      window.scrollY < mentorSection.current.offsetTop + 200
    ) {
      // @ts-ignore
      headerSection.current.style.letterSpacing = "10px";
    } else {
      // @ts-ignore;
      // @ts-ignore
      headerSection.current.style.letterSpacing = "5px";
    }
  };
  //   const handelMentorClick = (Mentors, i) => {
  //     Swal.fire({
  //       html: `
  //         <div class="mentor-popup">
  //             <div class="sw-container">
  //                 <div class = "sw-img-holder">
  //                     <img class = "sw-img" src=${Mentors[i].image}  alt="" />
  //                 </div>
  //                 <h2 class= "sweet-name">${Mentors[i].name} </h2>
  //             </div>
  //             <div class = "sw-info">
  //                     <p> ${Mentors[i].info} </p>
  //             </div>
  //         </div>
  //             `,
  //       width: "50%",
  //       padding: "20px",
  //       showConfirmButton: false,
  //       showCloseButton: true,
  //       footer: `<div>
  //                         <a href= ${Mentors[i].channal} style = ${{
  //         color: "red",
  //       }} target = "_blank">
  //                             <img class = "youtube" src=${Youtube} alt="" />
  //                         </a>
  //                     </div>`,
  //     });
  //   };
  useEffect(() => {
    window.addEventListener("scroll", handelscrolling);
    return () => {
      window.removeEventListener("scroll", handelscrolling);
    };
  }, []);
  // eslint-disable-next-line react/prop-types
  const Mentors = props.item;
  // eslint-disable-next-line react/prop-types
  const ListOfMentors = Mentors.map((item, i) => (
    <div className={`mentor-card card-${i + 1}`} key={item.id}>
      <div className="image-holder">
        <img className="card-image" src={item.image} alt="" />
      </div>
      <h2 className="mentor-name">{item.name}</h2>
    </div>
  ));
  return (
    <>
      <div className="mentor-section" ref={mentorSection} id="skills">
        <h2 className="intro" ref={headerSection}>
          {" "}
          My Skills
        </h2>
        <div className="slider">
          <h4 className="sub-skills">Techanical Skills</h4>
          <div className="inner" style={{ position: "relative" }}>
            {ListOfMentors}
          </div>
          <h4 className="sub-skills soft">Soft Skills</h4>
        </div>
        <div className="softskills ">
          <span>
            <FontAwesomeIcon icon={faCircle} />
            Attention to Detalis
          </span>
          <span>
            <FontAwesomeIcon icon={faCircle} />
            Analytical Thinking
          </span>
          <span>
            <FontAwesomeIcon icon={faCircle} />
            Problem Solving
          </span>
          <span>
            <FontAwesomeIcon icon={faCircle} />
            Team work
          </span>
          <span>
            <FontAwesomeIcon icon={faCircle} />
            Communication Skills
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
