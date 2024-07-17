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
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { CiPhone, CiMail } from "react-icons/ci";



export const listOfSkills = [
    {
        Icon: SiReact,
        text: "React",
    },
    {
        Icon: SiNestjs,
        text: "Nest.js",
    },
    {
        Icon: SiTailwindcss,
        text: "Tailwindcss",
    },
    {
        Icon: SiTypescript,
        text: "Typescript",
    },
    {
        Icon: SiExpress,
        text: "Express.js",
    },
    {
        Icon: SiNextdotjs,
        text: "Next.js",
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

