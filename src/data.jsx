import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.png";
import Work2 from "./assets/project-2.png";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

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
// Function to calculate age dynamically
function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Adjust age if the birthdate hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Kanishka",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Deo",
  },

  {
    id: 3,
    title: "Age : ",
    description: calculateAge("2002-01-27") + " Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Ratlam(M.P)",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+916264547523",
  },

  {
    id: 8,
    title: "Email : ",
    description: "kanishkadeo27012002@gmail.com",
  },

  {
    id: 9,
    title: "Github : ",
    description: <a href="https://github.com/kanishkadeo27" target="_blank" rel="noopener noreferrer" style={{
      maxWidth: "400px", // Adjust the width as needed
      wordWrap: "break-word",
      overflowWrap: "anywhere",
    }}>
      https://github.com/kanishkadeo27
    </a>,
  },
  {
    id: 10,
    title: "Linkdln : ",
    description: <a href="https://www.linkedin.com/in/kanishka-deo-077280201/" target="_blank" rel="noopener noreferrer" style={{
      maxWidth: "400px", // Adjust the width as needed
      wordWrap: "break-word",
      overflowWrap: "anywhere",
    }}>
      https://www.linkedin.com/in/kanishka-deo-077280201/
    </a>,
  },

  {
    id: 11,
    title: "Hackerrank : ",
    description: <a href="https://www.hackerrank.com/profile/kanishkadeo92022" target="_blank" rel="noopener noreferrer" style={{
      maxWidth: "600px", // Adjust the width as needed
      wordWrap: "break-word",
      overflowWrap: "anywhere",
    }}>
      https://www.hackerrank.com/profile/kanishkadeo92022
    </a>,
  },

  {
    id: 12,
    title: "Langages : ",
    description: "Hindi, English , Marathi",
  },
];

export const stats = [
  {
    id: 1,
    no: "1+",
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

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Jan'2024 - June'2024",
    title: "React Developer <span> Axelor </span>",
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
    year: "Aug'2020 - April'2024",
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

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "80",
  },

  {
    id: 3,
    title: "Css",
    percentage: "80",
  },

  {
    id: 4,
    title: "React",
    percentage: "75",
  },

  {
    id: 5,
    title: "Bootstrap",
    percentage: "50",
  },

  {
    id: 6,
    title: "C++",
    percentage: "80",
  },

  {
    id: 7,
    title: "Git",
    percentage: "75",
  },

  {
    id: 8,
    title: "C",
    percentage: "80",
  },
];

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
        desc: <a href="https://todolistapplicationminiproject.netlify.app/" target="_blank" rel="noopener noreferrer" style={{
          maxWidth: "600px", // Adjust the width as needed
          wordWrap: "break-word",
          overflowWrap: "anywhere",
        }}>
          Click to Preview        </a>,


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
        desc: <a href="https://quiz-app-with-scores.netlify.app/" target="_blank" rel="noopener noreferrer" style={{
          maxWidth: "600px", // Adjust the width as needed
          wordWrap: "break-word",
          overflowWrap: "anywhere",
        }}>
          Click to Preview</a>,


      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Random Password Generator",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React , css , html , javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://random-pass-generator-application.netlify.app/" target="_blank" rel="noopener noreferrer" style={{
          maxWidth: "600px", // Adjust the width as needed
          wordWrap: "break-word",
          overflowWrap: "anywhere",
        }}>
          Click to Preview</a>,


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
        desc: <a href="https://kd-keeps.netlify.app/" target="_blank" rel="noopener noreferrer" style={{
          maxWidth: "600px", // Adjust the width as needed
          wordWrap: "break-word",
          overflowWrap: "anywhere",
        }}>
          Click to Preview</a>,
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Gym Landing Page",
      },
      {
        title: "Language : ",
        desc: "Html , css, javascript",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Digital Clock",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Digital clock",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "html , css , javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: <a href="https://digital-clock-mini-project.netlify.app/" target="_blank" rel="noopener noreferrer" style={{
          maxWidth: "600px", // Adjust the width as needed
          wordWrap: "break-word",
          overflowWrap: "anywhere",
        }}>
          Click to Preview</a>,
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
