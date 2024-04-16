"use client";

import { Component, useEffect, useState } from "react";
import TerminalBox from "../terminal/TerminalBox";
import Welcome from "../terminal/commands/Welcome";
import Help from "../terminal/commands/Help";
import { TerminalBoxProps } from "@/types";

const Kernel = () => {

    const firtCmd = {
        commands: [
            {
                cmd: "",
                Component: Welcome,
                time: new Date().toLocaleDateString(),
            },
            {
                cmd: "help",
                Component: Help,
                time: new Date().toLocaleDateString(),
            }
        ],
        position: {
            x: 100,
            y: 200,
        }
    }

    const [terminals, setTerminals] = useState<TerminalBoxProps[]>([]);

    // handling the keydown & keyup
    useEffect(() => {
        document.body.addEventListener("keydown", createNewTerminal);
    }, []);
    // functionality to create new terminal based on previews terminals
    const createNewTerminal = (e: KeyboardEvent) => {
        if (e.ctrlKey && e.altKey && e.key.toLocaleLowerCase() === "t") {
            alert("keyPress")

            setTerminals([firtCmd])

        }
    }

    return (
        <>
            {
                terminals.map((terminal) => <TerminalBox commands={terminal.commands} position={terminal.position} />)
            }
        </>
    )
}

export default Kernel 
