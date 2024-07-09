"use client";
import { useEffect, useState } from "react";
import TerminalBox from "../terminal/TerminalBox";
import { TerminalBoxProps } from "@/types";
import { useWindowSize } from "@react-hook/window-size"
import { firtCmd } from "@/lib/constants";


const Controller = () => {
    // functions to get the screen size to center the terminals
    const [windowWith, windowHeight] = useWindowSize()
    // state that holds all the terminals : but does not contains the data of the comands
    const [terminals, setTerminals] = useState<TerminalBoxProps[]>([firtCmd(windowWith, windowHeight)]);
     // handling the click on the terminals
     const [focusTerminal, setFocusTerminal] = useState<number>(0);

    // handling the keydown & keyup
    useEffect(() => {
        const createNewTerminal = (e: KeyboardEvent) => {
            if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "t") {
                if (terminals.length === 0) {
                    setTerminals((prevState: any) => [...prevState, firtCmd]);
                } else if (terminals.length === 4) {
                    alert("Limit of terminals reached");
                } else {
                    setTerminals([...terminals,
                    {
                        commands: [],
                        id: terminals.length,
                        position: { x: windowWith / 4 + 50 * terminals.length, y: -windowHeight / 4 - 50 * terminals.length }
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

export default Controller 
