import web from "../assets/icons/web.png";
import nn from "../assets/icons/nn.gif";
import dig from "../assets/icons/dig.gif";
import ai from "../assets/icons/ai.gif";
import AI1 from "../assets/icons/AI1.gif";
import html5 from "../assets/icons/html5.png";
import react from "../assets/icons/react.png";
import angular from "../assets/icons/angular.png";
import python from "../assets/icons/python.png";
import firebase from "../assets/icons/google-firebase.png";
import backbone from "../assets/icons/backbone.png"; 

export const skills = [
    {
        title: "Software Engineering",
        icon: dig,
    }, 
    {
        title: "Machine Learning",
        icon: nn,
    }, 
    {
        title: "Generative AI Development",
        icon: AI1,
    }, 
    {
        title: "Web App Development",
        icon: ai,
    }, 
    
    ];

export const navList = [
    { id: 1, data: "Home" },
    { id: 2, data: "Tech" },
    { id: 3, data: "Skills" },
    { id: 4, data: "Experience" },
    { id: 5, data: "Projects" },
    { id: 5, data: "Contact" },
];

export const experiences = [
    {
        title: "Generative AI Engineer",
        company: "Reality AI Lab",
        icon: web,
        date: "December 2024 – Present",
        points: [
            " Developing Generative AI Solutions: Building features for Marvel AI using technologies such as LangChain, LlamaIndex, and Retrieval-Augmented Generation(RAG) workflows. ",
            "Collaborating with a global team on open-source AI tools to make education more accessible. ",
            " Deploying AI services using Google Cloud Run, monitored performance with Log Explorer, and refined outputs through LangSmith for prompt optimization.",
        ],
    },

    {
        title: "Software Engineer Coach",
        company: "MEST Africa",
        icon: web,
        date: "Oct 2024 – Nov 2024",
        points: [
            "Guided frontend development trainees to build web applications using ReactJS.",
            "Conducted in-depth code reviews, providing constructive feedback to improve code readability, efficiency and adherence to standards",
            "Guided engineers to establish meaningful career goals, identify strengths and create personalized development plans",
        ],
    },

    {
        title: "End User Computing Support",
        company: "Newmont Africa",
        icon: web,
        date: "Jan 2023 – October 2023",
        points: [
            "Provided on-site technical support and resolved issues for users across various technology platforms.",
            "Diagnosed and resolved hardware, network, and software issues in both mobile and fixed devices.",
            "Maintained operational integrity of technology facilities, including printers, audiovisual equipment, and meeting rooms.",
        ],
    },
    {
        title: "Software Engineer, Intern",
        company: "Turntabl",
        icon: web,
        date: "May 2021 – June 2021",
        points: [
            "Collaborated with a team to develop a web-based application for real-time sign language translation.",
            "Trained the sign language recognition model using Google Teachable Machine with custom datasets. ",
            "Designed and developed the frontend interface using HTML, CSS, and JavaScript to deliver an intuitive user experience. ",
            "Built and managed the database using SQLite for efficient data storage and retrieval.",
        ],
    },
    
];

export const technologies = [
    {
        name: "HTML 5",
        icon: html5,
    },
    {
        name: "Backbone",
        icon: backbone,
    },
    {
        name: "Firebase",
        icon: firebase, 
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "React",
        icon: react,
    },
];

export const projects = [
    {
        name: "AI Home-based Weapon Detection Security System",
        image: python,
        shortDescription: "Detects weapon on home intruders.",
        fullDescription:
            "This system is built to detect weapon(knife) on home intruders in the absence of the home owner. With features such as taking snapshots of the intruder with the weapon and alerting the home owner through text messaging, it enhances home security.",
        techStack: ["Python", "YOLOv5", "OpenCV"],
        demoLink: "#"
    },
    {
        name: "SiKiZa",
        image: python,
        shortDescription: "Translates sign language to text",
        fullDescription:
            "This project is a real-time sign language translator. This project was initiated with the purpose of bridging the gap between the hearing-impaired community and the community without such disability.",
        techStack: ["Flask", "Python", "HTML", "CSS", "JavaScript", "SQLite", "Google Teachable Machine"],
        demoLink: "https://github.com/YCienne/SiKiZa"
    },
    {
        name: "Ignition",
        image: python,
        shortDescription: "A website for an event center",
        fullDescription:
            "This website is to help clients easily locate and identify the event center and the services rendered.",
        techStack: ["ReactJS", "JavaScript", "Tailwind CSS"],
        demoLink: "https://ignition-kutunse.netlify.app/"
    },
];



    