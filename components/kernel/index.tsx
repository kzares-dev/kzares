"use client";
import {  useEffect, useState } from "react";
import TerminalBox from "../terminal/TerminalBox";
import Welcome from "../terminal/commands/Welcome";
import Help from "../terminal/commands/Help";
import { TerminalBoxProps } from "@/types";


const Kernel = () => {
    // functions to get the screen size to center the terminals
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

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
    const [terminals, setTerminals] = useState<TerminalBoxProps[]>([firtCmd]);



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
                        position: { x: windowSize.width / 4 + 50 * terminals.length, y: -windowSize.height / 4 - 50 * terminals.length }
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

    // delete terminal method
    const killTerminal = (i: number) => {
        const updatedTerminals = [...terminals];
        updatedTerminals.splice(i, 1);
        setTerminals(updatedTerminals);
        setFocusTerminal(terminals.length - 2);
    }

    return (
        <>
            {
                terminals.map((terminal, idx) => <TerminalBox
                    killTerminal={killTerminal}
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
