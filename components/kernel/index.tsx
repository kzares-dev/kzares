"use client";
import { Component, useEffect, useState } from "react";
import TerminalBox from "../terminal/TerminalBox";
import Welcome from "../terminal/commands/Welcome";
import Help from "../terminal/commands/Help";
import { useRecoilState } from "recoil";
import { terminalsAtom } from "@/lib/recoil";
import { TerminalBoxProps } from "@/types";

const Kernel = () => {
    // functions to get the screen size to center the terminals
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });
    // Track the screen size to put the terminal in center
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    // state that holds all the terminals : but does not contains the data of the comands
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
            x: windowSize.width / 4,
            y: -windowSize.height / 4,
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
                    setTerminals([...terminals,
                    {
                        commands: [],
                        id: terminals.length,
                        position: { x: windowSize.width /4 + 50*terminals.length, y: -windowSize.height /4 - 50*terminals.length }
                    }
                    ]);
                    setFocusTerminal(terminals.length)
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

    const clickOnTerminal = (i: number, callback: () => void) => {
        setFocusTerminal(i);
        callback()
    }

    return (
        <>
            {
                terminals.map((terminal, idx) => <TerminalBox
                    isUnique={terminals.length === 1}
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
