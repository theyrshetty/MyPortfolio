import { Christ, anuvrittiksha } from "../assets/images";
import {
   //car,
    contact,
    css,
   //estate,
    excel,
    git,
    github,
    html,
    javascript,
    linkedin,
    c,
    java,
    kotlin,
    mysql,
    powerbi,
    python,
    r,
    tableau,
    artstation,
    instagram,
    latex,
    php,
    // mongodb,
    // motion,
    // mui,
    // nextjs,
    // nodejs,
    pricewise,
    // react,
    // redux,
    // sass,
    // snapgram,
     summiz,
    // tailwindcss,
     threads,
     canva
    // typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: c,
        name: "C",
        type: "Programming Language",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Programming Language",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: r,
        name: "R",
        type: "Data Analysis",
    },
    {
        imageUrl: powerbi,
        name: "Power BI",
        type: "Data Visualization",
    },
    {
        imageUrl: tableau,
        name: "Tableau",
        type: "Data Visualization",
    },
    {
        imageUrl: excel,
        name: "Excel",
        type: "Data Analysis",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Programming Language",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: latex,
        name: "Latex",
        type: "Documentation",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: canva,
        name: "Canva",
        type: "Graphic Design",
    }
];


export const experiences = [
    {
        title: "Creative Technology Developer",
        company_name: "Anuvrittiksha EdTech Pvt. Ltd.",
        icon: anuvrittiksha,
        iconBg: "#accbe1",
        date: "May 2024 - July 2024",
        points: [
            "Ideated, scripted, and animated solution explanation videos for six Leetcode topics, ensuring accuracy and clarity.",
            "Developed robust yet simple code for six Leetcode problems, exploring multiple approaches.",
            "Reviewed and edited scripts and code for over a dozen Leetcode solution videos, enhancing quality and understanding while collaborating across time zones using the Scrum model with Jira and Confluence.",
        ],
    },
    {
        title: "Research Intern",
        company_name: "Centre for A.I. at Christ University",
        icon: Christ,
        iconBg: "#fbc3bc",
        date: "September 2025 - March 2025",
        points: [
            "Contributed to the Indo-German Corpus project by building a web scraper to collect over 15,000 parliamentary discussion PDFs.",
            "Implemented OCR to extract text from multilingual PDFs, ensuring accurate data processing.",
            "ITokenized large datasets, facilitating further analysis of parliamentary discourse.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/theyrshetty',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/theyrshetty',
    },
    {
        name: 'Artstation',
        iconUrl: artstation,
        link: 'https://www.artstation.com/theyrshetty', // Replace with your actual Artstation URL
    },
    {
        name: 'Instagram',
        iconUrl: instagram,
        link: 'https://www.instagram.com/babithablasters',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];