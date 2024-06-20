import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Anurag Bhardwaj",
  initials: "AB",
  location: "Bengaluru",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
  summary:
    "As a Full Stack Engineer I build and deploy applications from concept to production. I’m proficient in both frontend and backend development with Java, Spring Boot, Flutter and React. I’ve experience in automating testing, CI/CD pipelines and backend services. I love working in teams, leading teams and mentoring peers to perform at their best. Currently I’m focused on Java, Spring Boot, Docker and Kubernetes. With a solid computer science foundation and hands on experience in many projects I deliver high quality software.",
  avatarUrl: "https://avatars.githubusercontent.com/u/65033601?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "a4anurag13@gmail.com",
    tel: "+917494870643",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/anuragbhardwaj13",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anuragbhardwaj13/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/anuragbh13",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Chandigarh group of Colleges, Landran",
      degree: "Bachelor's of Technology in Computer Science and Engineering",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Smiota Labs India Pvt Ltd",
      link: "https://smiota.com/",
      badges: ["Remote"],
      title: "Software Engineer 1",
      logo: "",
      start: "July 2023",
      end: null,
      description:
        "Optimized API and Android testing, 50% faster and 95% coverage. Wrote Unit tests and fixed numerous Sonarqube Bugs in Spring Boot based Microservice. Deployed and Monitored Applications using Docker, Kubernetes, Helm and Google Kubernetes Engine",
    },
    {
      company: "Nokia Networks",
      link: "https://www.nokia.com/",
      badges: ["Bengaluru"],
      title: "Student Intern",
      logo: "",
      start: "September 2022",
      end: "June 2023",
      description:
        "Developed CI/CD pipelines and automated test cases for Kubernetes Cluster Installation at Nokia Networks, ensuring high-quality assurance and smooth production transition",
    },
   
  ],
  skills:  [
      "Java",
      "JavaScript",
      "MongoDB",
      "MySQL",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Python",
      "Dart",
      "HTML",
      "CSS",
      "Flutter",
      "React",
      "Redux",
      "NextJS",
      "NodeJS",
      "Tailwind CSS",
      "Express",
      "Selenium",
      "Maven",
      "Git",
  ]
  ,
  projects: [
    {
      title: "News App - Saransa [Freelance]",
      techStack: [
        "Mobile Application Developer","Flutter","Firebase"," MVC Architecture"
      ],
      description:
        "News App developed with Flutter using MVC architecture, in-app web view, custom categories, social media login, Custom Notifications Support using Firebase Messaging, Google Play Referrer API and English & Nepali language support.",
      logo: ParabolLogo,
      link: {
        label: "Google Play Link",
        href: "https://play.google.com/store/apps/details?id=com.deltadot.saransa&pcampaignid=web_share",
      },
    },
    {
      title: "CMS | Content Management System (Backend)",
      techStack: [
        "Backend Developer",
        "Java",
    "Spring Boot",
    "Maven",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "GCP"
      ],
      description:
        "Built a CMS backend service with Spring Boot and MongoDB, JWT auth and role based access control for content, content approval for quality, deployed in a Docker container on GCP with Kubernetes.",
      logo: "",
      link: {
        label: "Github",
        href: "https://github.com/anuragbhardwaj13/springboot-cms",
      },
    },
    {
      title: "Crypx",
      techStack: [
        "Frontend Developer",
        "React",
    "Axios",
    "ChakraUI",
    "Chart.js"
      ],
      description: "Developed a user-friendly React.js frontend with Coingecko API and ChakraUI for real-time cryptocurrency tracking and interactive charts using Chart.js, optimizing user experience and enhancing user engagement.",
      logo: "",
      link: {
        label: "crypx",
        href: "https://crypx-five.vercel.app/",
      },
    },
    {
      title: "wc-js",
      techStack: ["Node.js"],
      description:
        "Node.js script designed to provide various statistics about a text file, such as the number of lines, words, characters, and the file size in bytes. It offers a simple CLI (Command-Line Interface) to input commands and flags to specify what statistics to retrieve.",
      logo: MonitoLogo,
      link: {
        label: "wc-js",
        href: "https://github.com/anuragbhardwaj13/wc-js",
      },
    },
    {
      title: "Cleaning Service Company - Landing Page",
      techStack: ["Freelance", "HTML", "CSS"],
      description:
        "Developed a landing page for SRX Cleaning using HTML, CSS, and JavaScript, featuring a clean and responsive design to effectively showcase the cleaning services offered by the company.",
      logo: "",
      link: {
        label: "github.com",
        href: "https://github.com/anuragbhardwaj13/srx-cleaning",
      },
    },
    
  ],
} as const;
