import { useEffect, useRef, useState } from "react";
import "./main.css";
import { myProjects } from "./myprojects";
import { motion } from "framer-motion";

function Main() {
  const ProjectSection = useRef();
  const headerSection = useRef();
  const [currentActive, setcurrentActive] = useState("All");
  const [arr, setArr] = useState(myProjects);
  useEffect(() => {
    window.addEventListener("scroll", handelscrolling);
    return () => {
      window.removeEventListener("scroll", handelscrolling);
    };
  }, []);
  const handelscrolling = () => {
    // @ts-ignore
    if (
      window.scrollY >= ProjectSection.current.offsetTop - 500 &&
      window.scrollY < ProjectSection.current.offsetTop + 500
    ) {
      // @ts-ignore
      headerSection.current.style.letterSpacing = "10px";
    } else {
      // @ts-ignore;
      // @ts-ignore
      headerSection.current.style.letterSpacing = "5px";
    }
  };
  const handelClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArray = myProjects.filter((item) => {
      const specific = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return specific === buttonCategory;
    });
    setArr(newArray);
  };
  return (
    <>
      <h2 className="intro" ref={headerSection} id="project">
        {" "}
        My Project
      </h2>
      <main className="flex" ref={ProjectSection}>
        <section className="flex left-section">
          <button
            onClick={() => {
              setcurrentActive("All");
              setArr(myProjects);
            }}
            className={currentActive === "All" ? "active" : null}
          >
            All Projects
          </button>
          <button
            onClick={() => {
              handelClick("css");
            }}
            className={currentActive === "css" ? "active" : null}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => {
              handelClick("js");
            }}
            className={currentActive === "js" ? "active" : null}
          >
            JS
          </button>
          <button
            onClick={() => {
              handelClick("React");
            }}
            className={currentActive === "React" ? "active" : null}
          >
            React
          </button>
        </section>
        <motion.section className="right-section flex" layout>
          {arr.map((Item) => {
            return (
              <motion.article
                key={Item.imgPath}
                className=" card"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", damping: 6, stiffness: 50 }}
                layout
              >
                <img width={220} src={Item.imgPath} alt="" />
                <div style={{ width: "220px" }} className="box">
                  <h1 className="title">{Item.projectTitle}</h1>
                  <p className="sub-title"> {Item.subtitle}</p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        className="icon-link"
                        href="https://pcwindowscalculator.netlify.app/"
                        target="_blank"
                      ></a>
                      <a
                        className="icon-github"
                        href={Item.github}
                        target="_blank"
                      ></a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.section>
      </main>
    </>
  );
}

export default Main;
