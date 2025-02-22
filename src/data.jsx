import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.png";
import Work4 from "./assets/project-4.png";
import Work5 from "./assets/project-5.png";
import Work6 from "./assets/project-6.png";

import Theme1 from "./assets/color/purple.png";
import Theme2 from "./assets/color/red.png";
import Theme3 from "./assets/color/blueviolet.png";
import Theme4 from "./assets/color/blue.png";
import Theme5 from "./assets/color/goldenrod.png";
import Theme6 from "./assets/color/magenta.png";
import Theme7 from "./assets/color/yellowgreen.png";
import Theme8 from "./assets/color/orange.png";
import Theme9 from "./assets/color/green.png";
import Theme10 from "./assets/color/yellow.png";
// navigation links
export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];
// About me info data
export const personalInfo = [
  {
    id: 1,
    title: "Name : ",
    description: "Kanishka Deo",
  },

  {
    id: 2,
    title: "Location : ",
    description: "Ratlam , Madhya Pradesh , India",
  },
  {
    id: 3,
    title: "Phone : ",
    description: "+91-6264547523",
  },

  {
    id: 4,
    title: "Email : ",
    description: "kanishkadeo27012002@gmail.com",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Github : ",
    description: (
      <a
        className="info__link"
        href="https://github.com/kanishkadeo27"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://github.com/kanishkadeo27
      </a>
    ),
  },
  {
    id: 7,
    title: "Linkdln : ",
    description: (
      <a
        className="info__link"
        href="https://www.linkedin.com/in/kanishka-deo-077280201/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.linkedin.com/in/kanishka-deo-077280201/
      </a>
    ),
  },

  {
    id: 8,
    title: "Hackerrank : ",
    description: (
      <a
        className="info__link"
        href="https://www.hackerrank.com/profile/kanishkadeo92022"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.hackerrank.com/profile/kanishkadeo92022
      </a>
    ),
  },
];
// about me stats
export const stats = [
  {
    id: 1,
    no: "fresher",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "5+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "5+",
    title: "Workshops <br /> Attended",
  },

  {
    id: 4,
    no: "10+",
    title: " Certifications <br /> Done",
  },
];
// about me skills
export const skills = [
  {
    id: 1,
    title: "C Language",
    percentage: "90",
  },

  {
    id: 2,
    title: "C++",
    percentage: "80",
  },

  {
    id: 3,
    title: "HTML",
    percentage: "95",
  },

  {
    id: 4,
    title: "CSS",
    percentage: "90",
  },

  {
    id: 5,
    title: "Javascript",
    percentage: "85",
  },

  {
    id: 6,
    title: "React Js",
    percentage: "80",
  },

  {
    id: 7,
    title: "Bootstrap",
    percentage: "75",
  },

  {
    id: 8,
    title: "Wordpress",
    percentage: "50",
  },
  {
    id: 9,
    title: "Git",
    percentage: "50",
  },
  {
    id: 10,
    title: "Github",
    percentage: "70",
  },
  {
    id: 11,
    title: "SQL",
    percentage: "50",
  },
  {
    id: 12,
    title: "RWD",
    percentage: "80",
  },
];
// about me education and experience
export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Jan'2024 - June'2024",
    title: "React Developer <span> Axelor Technologies Pvt Ltd </span>",
    desc: "During my 6-month internship at Axelor Technologies Pvt Ltd, I underwent 3 months of training in HTML, CSS, JavaScript, React, and Git. I worked on projects like building a portfolio website, implementing form validations, and creating a shopping cart. In the second phase, I contributed to developing two modules of an existing project, gaining experience in real-world software development and collaboration. This internship significantly improved my technical skills, problem-solving abilities, and teamwork.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Aug'2023 - Sept'2023",
    title: "Web Designer&Developer <span> Oasis Infobyte </span>",
    desc: "During my internship at Oasis Infobyte, I worked on practical projects that helped me enhance my skills in web development. I gained hands-on experience in HTML, CSS, JavaScript, and React, working on building responsive websites and interactive user interfaces.",
  },
  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Aug'2020 - May'2024",
    title: "BTECH CSE-AI <span> Parul University , Vadodara Gujarat </span>",
    desc: "8.40 CGPA",
  },
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "April'2019 - March'2020",
    title: "HSC <span> Shri Guru Tegh Bahadur Academy , Ratlam MP </span>",
    desc: "88.6% with PCM",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "April'2017 - March'2018",
    title: "SSC <span> Shri Guru Tegh Bahadur Academy , Ratlam MP </span>",
    desc: "88%",
  },
];

// projects portfolio
export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "To Do List",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "ToDo List App",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://todolistapplicationminiproject.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              maxWidth: "600px", // Adjust the width as needed
              wordWrap: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            Click to Preview{" "}
          </a>
        ),
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Quiz App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Quiz App",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://quiz-app-with-scores.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              maxWidth: "600px", // Adjust the width as needed
              wordWrap: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            Click to Preview
          </a>
        ),
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Currency Converter",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Currency Converter",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React , css , html , javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://currency-convertex.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              maxWidth: "600px", // Adjust the width as needed
              wordWrap: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            Click to Preview
          </a>
        ),
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "KD Keeps App",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "keeps app",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React , html , css , javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://kd-keeps.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              maxWidth: "600px", // Adjust the width as needed
              wordWrap: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            Click to Preview
          </a>
        ),
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Eshop",
    details: [
      {
        title: "Project : ",
        desc: "Multivendor Ecommerce",
      },
      {
        title: "Language : ",
        desc: "Html , css, javascript , react , express , node , razorpay , mongodb",
      },
      {
        title: "Preview : ",
        desc: (
          <a
            href="https://multivendorshopo.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              maxWidth: "600px", // Adjust the width as needed
              wordWrap: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            Click to Preview
          </a>
        ),
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Career Compass",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Career Guidance Website",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "html , css , javascript , nodejs",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: (
          <a
            href="https://careercompasswebapp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              maxWidth: "600px", // Adjust the width as needed
              wordWrap: "break-word",
              overflowWrap: "anywhere",
            }}
          >
            Click to Preview
          </a>
        ),
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
