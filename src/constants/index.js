import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import bank from "../assets/company/bank.png"
import youtube from "../assets/company/youtube.jpg"
import medcine from "../assets/company/medcine.jpg"
import library from "../assets/company/library.png"
import angular from "../assets/tech/angular.png";
import sweven from "../assets/company/sweven.jpg";
import freelancer from "../assets/company/freelancer.jpg";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Mobile App Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "angular",
    icon: angular,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Jun 2024 - Present",
    points: [
      "Developed reusable Angular components, leading an increase in code reuse and consistency across the application.",
      "Created independent, self-contained front-end modules for separate development, testing, and deployment.",
      "Optimized software components, modules, and algorithms for high performance and accuracy.",
      "Leveraged Redux for state management, ensuring predictable state transitions and enhancing the application's scalability.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Sweven Trading PLC",
    icon: sweven,
    iconBg: "#E6DEDD",
    date: "Oct 2020 - Jun 2023",
    points: [
      "Led a cross-functional team of 3 developers, ensuring on-time project completion and conducting regular consulting knowledge-sharing sessions to enhance workflow efficiency.",
      "Incorporated core and recent React features to encapsulate reusable logic, enhancing code readability and reducing redundancy across the codebase.",
      "Created independent, self-contained front-end modules for separate development, testing, and deployment, reducing integration issues ",
      "Participated in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Sweven Trading PLC",
    icon: sweven,
    iconBg: "#E6DEDD",
    date: "Aug 2018 - Oct 2020",
    points: [
      "Developed RESTful services and middleware with Express.js, ensuring robust error handling and response.",
      "Collaborated closely with UX/UI designers, translating wireframes and prototypes into interactive and responsive user interfaces.",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Executed comprehensive testing with Jest, Mocha, and Cypress",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Beniyam created a website that effectively represents our product.",
    name: "Betty Gizaw",
    designation: "Senior Software Engineer",
    company: "Sweven Trading PLC",
    image: "https://randomuser.me/api/portraits/women/88.jpg",
  },
  {
    testimonial:
      "Beniyam is a web developer who genuinely focuses on client satisfaction.",
    name: "Solomon Tadesse",
    designation: "CEO",
    company: "Sweven Trading PLC",
    image: "https://randomuser.me/api/portraits/men/49.jpg",
  },
  {
    testimonial:
      "Beniyam's optimizations improved our website's traffic noticeably",
    name: "Gere Reda",
    designation: "Senior Software Engineer",
    company: "Citibank",
    image: "https://randomuser.me/api/portraits/men/80.jpg",
  },
];

const projects = [
  {
    name: "Library Management Mobile App",
    description:
      "Library management mobile app developed using React Native, featuring user-friendly interfaces for browsing, borrowing returning books and inventory tracking.",
    tags: [
      {
        name: "react Native",
        color: "blue-text-gradient",
      },
      {
        name: "JSON Sever",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/Bennymedic/Library-management-mobile-app",
  },
  {
    name: "Youtube Clone",
    description:
      "Modern YouTube Clone Application developed using React JS and Material UI 5, incorporating a responsive user interface and real-time search functionality to enhance user engagement and experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
    ],
    image: youtube,
    source_code_link: "https://github.com/Bennymedic/YouTube-Clone-Application",
  },
  {
    name: "Medication Reviews/Side-Effects app",
    description:
      "Medication Reviews/Side-Effects app where users can browse, review, and report side effects, featuring JWT authentication and ReactiveFormsModule for form handling.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Angular Material",
        color: "green-text-gradient",
      },
    ],
    image: medcine,
    source_code_link: "https://github.com/Bennymedic/Medication-Reviews-Side-Effects-application",
  },
  {
    name: "Banking App",
    description:
      "Banking app with a finance management dashboard that connects multiple bank accounts, displays real-time transactions, and allows you to transfer money to other users on the platform.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/Bennymedic/banking",
  },
];

export { services, technologies, experiences, testimonials, projects };
