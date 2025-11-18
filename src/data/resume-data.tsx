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
  location: "Gurugram, India",
  locationLink: "https://www.google.com/maps/place/Gurugram",
  about:
    "Full Stack Engineer driven to create impactful software solutions.",
  summary:
    "A results-driven Full Stack Engineer with a passion for turning ideas into working products, fast. I thrive on building end-to-end applications and can rapidly deliver MVPs or robust solutions using the best tools for the job—whether that's Java, Spring Boot, Flutter, React, or any modern framework. My versatile skill set spans frontend, backend, automation, and cloud, ensuring I can bring any vision to life and adapt to any challenge. With a strong foundation in computer science and proven reliability in delivering projects on time, I’m dedicated to helping teams and businesses reach their goals with high-quality, efficient software.",
  avatarUrl: "https://avatars.githubusercontent.com/u/65033601?v=4",
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
      company: "Freecharge Payment Technologies Pvt Ltd",
      link: "https://www.freecharge.in/",
      badges: ["Gurugram"],
      title: "Software Developement Engineer 1",
      logo: "",
      start: "June 2025",
      end: null,
      description:
"Implemented Kotlin-based microservices leveraging reactive programming (Project Reactor), increasing request throughput and reducing API response latency by 15%. \n• Refactored and optimized request/response schemas to align with evolving business rules, resolving 20+ production defects and meeting fintech regulatory standards. \n• Utilized Kafka to process asynchronous steps, enabling smooth application and customer onboarding."

        },
    {
      company: "Smiota Labs India Pvt Ltd",
      link: "https://smiota.com/",
      badges: ["Remote"],
      title: "Software Engineer 1",
      logo: "",
      start: "July 2023",
      end: "June 2025",
      description:
"Developed RESTful APIs using Spring Boot for the DayUse Service, wrote comprehensive unit tests achieving 95% code coverage, fixed issues using SonarQube to enhance code quality, deployed services on Google Cloud Platform using Kubernetes for high availability and scalability, and optimized infrastructure costs by 20% through effective resource management. Led the DevOps team during a major company restructuring, overseeing CI/CD pipelines, improving deployment automation, and ensuring seamless service migration and uptime throughout the transition period."

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
      "Kotlin",
      "JavaScript",
      "MongoDB",
      "MySQL",
      "Spring Boot",
      "Project Reactor",
      "Kafka",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Azure",
"Linux",
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
      title: "Short Videos App - Yathartha Khabar [Freelance]",
      techStack: [
        "Mobile Application Developer","Flutter","Firebase"," MVC Architecture"
      ],
      description:
        "Developed Yathartha Khabar, a short video app for independent journalists to share news videos, featuring HLS video streaming powered by MUX for smooth playback and content delivery.",
      logo: ParabolLogo,
      link: {
        label: "App Store Link",
        href: "https://apps.apple.com/us/app/saransa/id6572288287",
      },
    },
    {
      title: "News App - Saransa [Freelance]",
      techStack: [
        "Mobile Application Developer","Flutter","Firebase"," MVC Architecture"
      ],
      description:
        "News App developed with Flutter using MVC architecture, in-app web view, custom categories, social media login, Custom Notifications Support using Firebase Messaging, Google Play Referrer API and English & Nepali language support.",
      logo: ParabolLogo,
      link: {
        label: "App Store Link",
        href: "https://apps.apple.com/us/app/saransa/id6572288287",
      },
    },
    {
      title: "Multi Text-Diff App",
      techStack: [
        "JavaScript",
        "HTML",
        "CSS"
      ],
      description:
        "Built a web-based Multi Text-Diff Tool that allows comparison of differences across up to 10 text files simultaneously—an unmatched feature in existing tools. Includes a smart comparison algorithm to highlight precise changes and make multi-file text review fast and intuitive.",
      logo: ParabolLogo,
      link: {
        label: "Web Application Link",
        href: "https://anuragbhardwaj13.github.io/multi-text-diff/",
      },
    },
    {
      title: "ZapVault - Payment Gateway-Wallet Application",
      techStack: [
       "Java", "Spring Boot", "Next.js", "PostgreSQL", "Docker", "AWS (EC2, RDS)", "RESTful APIs", "Gmail SMTP"
      ],
      description:
"Developed a secure, full-stack payment gateway application with Spring Boot, Next.js, and PostgreSQL, featuring user authentication, wallet functionality, and transaction tracking, deployed on AWS using Docker and RDS.",
        logo: ParabolLogo,
      link: {
        label: "Live Link",
        href: "https://www.zapvault.in/",
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
