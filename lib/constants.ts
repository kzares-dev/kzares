import Help from "@/components/terminal/commands/Help"
import Welcome from "@/components/terminal/commands/Welcome"


export const firtCmd = (windowWith: number, windowHeight: number) => {
    return {
        id: 0,
        commands: [
            {
            cmd: "",
                Component: Welcome,
                time: new Date().toLocaleTimeString(),
            },
        ],
        position: {
            x: windowWith / 4,
            y: windowHeight/4,
        }
    }
}

export const bio = "My journey began in 2019 when I was drawn to C++ programming. Soon after, I dove into the world of frontend development with React, followed by Vue, and finally Svelte, as it was gaining momentum. However, my desire to create more ambitious projects pushed me to explore the backend with Python/Flask and Node/Nest. This journey has been incredibly fulfilling, but there is much more to learn and create!"

import {
    SiExpress,
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiNestjs,
    SiGithub,
    SiTelegram,
    SiPostgresql,
} from "react-icons/si";
import { CiPhone, CiMail } from "react-icons/ci";
import { FaDocker } from "react-icons/fa6"
import { BiLogoFlask, BiLogoMongodb } from "react-icons/bi"

export const experience = [
    {
        role: "FRONT-END DEVELOPER/CUBA \n GLADIATORS AGENCY",
        date: "JUNE 2022 – SEPTEMBER 2022",
        description: "These months provided my first real work experience at a local software development agency. My primary role was maintaining websites built by the team."
    },
    {   
        role: "FULL-STACK DEVELOPER \n TAXITEL",
        date: "JANUARY 2023 – AGUST 2023",
        description: "As part of a small team, I developed the website and mobile app for a Cuban taxi company that mirrored Uber's business model, using React Native."
    },
    {
        role: "UPWORK FREELANCER",
        date: "SEPTEMBER 2023 – NOW",
        description: "Through Upwork, I gained extensive experience, particularly in client communication and negotiation. My projects ranged from small website and server adjustments to the full development  of web platforms."
    }
]

export const listOfSkills = [
    {
        Icon: SiTypescript,
        text: "Typescript",
    },
    {
        Icon: BiLogoFlask,
        text: "Flask",
    },
    {
        Icon: SiReact,
        text: "React",
    },
    {
        Icon: SiNextdotjs,
        text: "Next.js",
    },
    {
        Icon: SiNestjs,
        text: "Nest.js",
    },
    
    {
        Icon: SiExpress,
        text: "Express.js",
    },
    {
        Icon: BiLogoMongodb,
        text: "MongoDb",
    },
    {
        Icon: SiPostgresql,
        text: "Postgress",
    },
    {
        Icon: FaDocker,
        text: "Docker",
    },
    
];

export const contacts = [
    {
        Icon: CiPhone,
        text: "Phone number",
        value: "+53 56931759",
        href: "tel:5356931759",
    },
    {
        Icon: CiMail,
        text: "Email",
        value: "kzares.dev@gmail.com",
        href: "mailto:kzares.dev@gmail.com",
    },
    {
        Icon: SiGithub,
        text: "Github",
        value: "github.com/kzares-dev",
        href: "https://github.com/kzares.dev",
    },
    {
        Icon: SiTelegram,
        text: "Telegram",
        value: "@kzares",
        href: "https://t.me/kzares",
    }

];

