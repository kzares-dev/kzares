"use client";
import { Component, useEffect, useState } from "react";
import TerminalBox from "../terminal/TerminalBox";
import Welcome from "../terminal/commands/Welcome";
import Help from "../terminal/commands/Help";
import { useRecoilState } from "recoil";
import { terminalsAtom } from "@/lib/recoil";
import { TerminalBoxProps } from "@/types";

const Kernel = () => {
    const [terminals, setTerminals] = useState<TerminalBoxProps[]>([]);

    const firtCmd = {
        id: 0,
        commands: [
            {
                cmd: "",
                Component: Welcome,
                time: new Date().toLocaleTimeString(),
            },
            {
                cmd: "help",
                Component: Help,
                time: new Date().toLocaleTimeString(),
            }
        ],
        position: {
            x: 100,
            y: 200,
        }
    }

    // handling the keydown & keyup
    useEffect(() => {
        const createNewTerminal = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "t") {
                if (terminals.length === 0) {
                    setTerminals((prevState) => [...prevState, firtCmd]);
                } else if (terminals.length === 4) {
                    alert("Limit of terminals reached");
                } else {
                    setTerminals([...terminals, { commands: [], id: terminals.length, position: { x: 100, y: 200 } }]);
                }
            }
        };

        document.body.addEventListener("keydown", createNewTerminal);

        return () => {
            document.body.removeEventListener("keydown", createNewTerminal);
        };
    }, [terminals, setTerminals]);

    // handling the click on the terminals
    const [focusTerminal, setFocusTerminal] = useState<number>(0);

    const clickOnTerminal = (i: number) => {
        setFocusTerminal(i)
    }

    return (
        <>
            {
                terminals.map((terminal, idx) => <TerminalBox
                    focusTerminal={focusTerminal}
                    clickOnTerminal={clickOnTerminal}
                    id={terminal.id}
                    key={idx}
                    commands={terminal.commands}
                    position={terminal.position} />)
            }
        </>
    )
}

export default Kernel 
