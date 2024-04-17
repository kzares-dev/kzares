"use client"
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import TodayDate from "./TodayDate";
import EnteredCmd from "./EnteredCmd";
import CmdUserInput from "./CmdUserInput";
import renderCmd from "@/lib/renderCmd"
import { Rnd } from "react-rnd"
import { TerminalBoxProps, command } from "@/types";

interface focusTerminalType {
	focusTerminal: number
	clickOnTerminal: (i: number, callback: () => void) => void
	isUnique: boolean
}

export default function TerminalBox({ commands, position, id, focusTerminal, clickOnTerminal, isUnique }: TerminalBoxProps & focusTerminalType) {

	// This state is the container of all commands
	const [enteredCmd, setEnteredCmd] = useState<command[]>(commands);

	// scroll to bottom
	const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>;
	useEffect(() => {
		dummyRef.current.scrollIntoView({ behavior: "auto" });
	}, [enteredCmd]);

	// simple handle submit 
	const handleSubmit = (cmd: string) => {
		setEnteredCmd((currentCmd) => [
			...currentCmd,
			{ ...renderCmd(cmd.trim()), time: new Date().toLocaleTimeString() },
		]);
	};

	// watch the combination of crl + l to clear the terminal
	useEffect(() => {
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
		if (e.ctrlKey && e.key.toLocaleLowerCase() === "l") {
			setEnteredCmd([]);
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
			<div
				onClick={() => clickOnTerminal(id, focusOnInput)}
			>
				<Navbar />
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
			</div>
		</Rnd>


	);
}
