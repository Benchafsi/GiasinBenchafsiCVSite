import {
  apiicon,
  backend,
  college1,
  college2,
  college3,
  creator,
  fps,
  htmlcodeicon,
  mapicon,
  mc,
  mobile,
  pcicon,
  tickets,
  web,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Dev Team Lead",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Unity Developer",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Incadea S.A.",
    icon: htmlcodeicon,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Promoted from Junior Developer to Software Engineer after demonstrating strong skills in backend architecture and software design.",
      "Actively involved in code reviews, mentoring junior developers, and improving coding standards within the team.",
      "Designed UI components using Material UI following Angular best practices and integrated RxJS for reactive data flow.",
    ],
  },
  {
    title: "Junior Back End .NET Developer",
    company_name: "Incadea S.A.",
    icon: apiicon,
    iconBg: "#383E56",
    date: "July 2023 - Feb 2024",
    points: [
      "Developed and maintained backend services using .NET Core and Postgres.",
      "Built and optimized RESTful APIs, microservices, and internal tools.",
      "Collaborated with cross-functional teams to improve system architecture and scalability.",
    ],
  },
  {
    title: "Junior Full Stack Developer",
    company_name: "Domi Pliroforikis S.A.",
    icon: pcicon,
    iconBg: "#383E56",
    date: "Jan 2023 - June 2023",
    points: [
      "Worked on full-stack development projects using .NET Core and Angular.",
      "Designed and implemented frontend components with Angular and RxJS.",
      "Developed APIs and backend services to support customer applications.",
    ],
  },
  {
    title: "Indie Game Developer",
    company_name: "Freelancer",
    icon: mapicon,
    iconBg: "#383E56",
    date: "July 2020 - Sept 2022",
    points: [
      "Developed desktop and mobile games in Unity using C#.",
      "Built a working multiplayer prototype using Photon Pun networking library.",
      "Gained hands-on experience with the software development lifecycle and game design.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "At Wrexham University, I pursued a Master's in Computing, which provided me with advanced technical skills and a strong foundation in modern software engineering principles.",
    name: "Master's in Computing",
    designation: "Postgraduate Studies",
    company: "Wrexham University",
    image: college1,
  },
  {
    testimonial:
      "I completed my Bachelor's in Informatique (OPEN I.T.) at IST College with a grade of 9.1/10, where I gained a robust grounding in IT concepts and practical applications.",
    name: "Bachelor Informatique OPEN I.T.",
    designation: "Undergraduate Studies",
    company: "IST College",
    image: college3,
  },
  {
    testimonial:
      "I also earned my qualification as an Informatics Technician at IEK Neas Iwnias, which equipped me with hands-on IT expertise and a focus on technical problem solving.",
    name: "Informatics Technician",
    designation: "Technical Training",
    company: "University of Economics and Business",
    image: college2,
  },
];

const projects = [
  {
    name: "Master's Codex",
    description: "Multiplayer turn based fantasy RPG",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Photon Pun",
        color: "pink-text-gradient",
      },
    ],
    image: mc,
    source_code_link: "https://github.com/Benchafsi/MastersCodex",
  },
  {
    name: "FPS Prototype",
    description: "Multiplayer fast paced FPS shooter.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C-sharp",
        color: "green-text-gradient",
      },
      {
        name: "Photon Pun",
        color: "pink-text-gradient",
      },
    ],
    image: fps,
    source_code_link:
      "https://github.com/Benchafsi/MultiplayerFPSUnityPrototype",
  },
  {
    name: "e-Tickets",
    description: "E-commerce application.",
    tags: [
      {
        name: ".NET MVC",
        color: "blue-text-gradient",
      },
      {
        name: "C-sharp",
        color: "green-text-gradient",
      },
      {
        name: "SQL-Server",
        color: "pink-text-gradient",
      },
    ],
    image: tickets,
    source_code_link: "https://github.com/Benchafsi/ecommerce-project",
  },
];

export { experiences, projects, services, testimonials };
