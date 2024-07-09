"use client"
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import TodayDate from "./TodayDate";
import EnteredCmd from "./EnteredCmd";
import CmdUserInput from "./CmdUserInput";
import renderCmd from "@/lib/renderCmd"
import { Rnd } from "react-rnd"
import { TerminalBoxProps, command } from "@/types";
import { motion } from 'framer-motion'

interface terminalMethods {
	focusTerminal: number
	clickOnTerminal: (i: number, callback: () => void) => void
	isUnique: boolean
	killTerminal: (i: number) => void
}

export default function TerminalBox({ commands, position, id, focusTerminal, clickOnTerminal, isUnique, killTerminal }: TerminalBoxProps & terminalMethods) {

	// This state is the container of all commands
	const [enteredCmd, setEnteredCmd] = useState<command[]>(commands);

	// scroll to bottom
	const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	useEffect(() => {
		dummyRef.current.scrollIntoView({ behavior: "auto" });
	}, [enteredCmd]);

	// simple handle submit 
	const handleSubmit = (cmd: string) => {
		// check if the user types "exit"
		if (cmd.trim() === "exit") {
			killTerminal(id)
			return
		}

		setEnteredCmd((currentCmd) => [
			...currentCmd,
			{ ...renderCmd(cmd.trim()), time: new Date().toLocaleTimeString() },
		]);
	};

	// watch the combination of crl + l to clear the terminal
	useEffect(() => {
		if (focusTerminal === id) {
			inputRef.current.focus();
		}

		const handleKeyEvent = (e: KeyboardEvent) => {
			if (focusTerminal !== id) return;
			if (e.ctrlKey && e.key.toLocaleLowerCase() === "l") {
				setEnteredCmd([]);
			}
		};

		if (focusTerminal === id) {
			document.body.addEventListener("keydown", handleKeyEvent);
		}

		return () => {
			document.body.removeEventListener("keydown", handleKeyEvent);
		};
	}, [focusTerminal, id, setEnteredCmd]);


	const handleKeyEvent = (e: KeyboardEvent) => {
		// clear historial 	
		if (e.ctrlKey && e.key.toLocaleLowerCase() === "l") {
			setEnteredCmd([]);
		}
		// kill terminal
		if (e.altKey && e.key.toLowerCase() === "d") {
			alert("delete")
			killTerminal(id)
		}
	};


	//handling the focus on the element
	// this method pass the ref to child component & keep the focus functionality on this level
	const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const focusOnInput = () => { inputRef.current.focus() }

	return (

		<Rnd
			default={{
				x: position.x,
				y: position.y,
				width: "896",
				height: "0",
			}}
			className={`${focusTerminal === id ? 'z-[100000]' : 'z-0'}`}

		>
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.2, type: 'spring' }}
				onClick={() => clickOnTerminal(id, focusOnInput)}
			>
				<Navbar killTerminal={killTerminal} id={id} />
				<div className={`z-1 h-[50vh] w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto  bg-black bg-opacity-[.75] box ${(focusTerminal === id && !isUnique) ? 'bg-opacity-[.90]' : ""} transition-all duration-[800] `} >
					<TodayDate />
					<EnteredCmd enteredCmd={enteredCmd} />
					<CmdUserInput
						inputRef={inputRef}
						id={id}
						focusTerminal={focusTerminal}
						onSubmit={handleSubmit} />
					<div ref={dummyRef}></div>


				</div>
			</motion.div>
		</Rnd>


	);
}
