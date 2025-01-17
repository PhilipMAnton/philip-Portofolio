import "./Skills.css";
import Card from "./card/Card";
// @ts-ignore

function Mentors() {
  const myMentors = [
    {
      id: "1",
      name: "HTML",
      image: "/html.png",
      info: "I would like to express my special thanks to my first mentor, Eng. Osama, who introduced me to the world of programming.",
    },
    {
      id: "2",
      name: "CSS",
      image: "/css.png",
      info: "oooooooooooooooooooooooooooooooo",
    },
    {
      id: "3",
      name: "Javascript",
      image: "/javascript.png",
      info: "Salma Mamdouh is the Data Science & ERP head at ITI. She holds a master of business administration and she started her professional career in 2011",
    },
    {
      id: "4",
      name: "React",
      image: "/react.png",
      info: "Salma Mamdouh is the Data Science & ERP head at ITI. She holds a master of business administration and she started her professional career in 2011",
    },
    {
      id: "5",
      name: "Java",
      image: "/java.png",
      info: "Eng.Mohammed ElDsoke a Lecture at the Faculty of Engineering and Computer Science - Information Systems Department",
    },
    {
      id: "6",
      name: "Jira",
      image: "/jira.png",
      info: "Salma Mamdouh is the Data Science & ERP head at ITI. She holds a master of business administration and she started her professional career in 2011",
    },
    {
      id: "6",
      name: "Selenium",
      image: "/Selenium.png",
      info: "Salma Mamdouh is the Data Science & ERP head at ITI. She holds a master of business administration and she started her professional career in 2011",
    },
    {
      id: "7",
      name: "Postman",
      image: "/postman.png",
      info: "Salma Mamdouh is the Data Science & ERP head at ITI. She holds a master of business administration and she started her professional career in 2011",
    },
  ];
  return (
    <>
      <Card item={myMentors} id="Skills" />
    </>
  );
}

export default Mentors;
