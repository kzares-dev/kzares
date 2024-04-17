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
}

export default function TerminalBox({ commands, position, id, focusTerminal, clickOnTerminal }: TerminalBoxProps & focusTerminalType) {

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
			{ ...renderCmd(cmd), time: new Date().toLocaleTimeString() },
		]);
	};

	// watch the combination of crl + l to clear the terminal
	useEffect(() => {
		if (focusTerminal !== id) return
		document.body.addEventListener("keydown", handleKeyEvent);
	}, [focusTerminal]);
	const handleKeyEvent = (e: KeyboardEvent) => {
		if (focusTerminal !== id) return
		if (e.ctrlKey && e.key.toLocaleLowerCase() === "l") {
			setEnteredCmd([]);
		}
	};
	// Track the screen size to put the terminal in center
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	});

	// !Is needed to fix this

	const elementWidth = 896; // Ancho del elemento que deseas centrar
	const elementHeight = windowSize.height / 2; // Alto del elemento que deseas centrar

	const centerX = (windowSize.width - elementWidth) / 2;
	const centerY = -windowSize.height / 4;

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

	//handling the focus on the element
	// this method pass the ref to child component & keep the focus functionality on this level
	const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const focusOnInput = () => { inputRef.current.focus() }

	return (

		<Rnd

			default={{
				x: centerX,
				y: centerY,
				width: "896",
				height: "0",
			}}
			className={`${focusTerminal === id ? 'z-[100000]' : 'z-0'}`}

		>
			<div
				onClick={() => clickOnTerminal(id, focusOnInput)}
			>
				<Navbar />
				<div className={`z-1 max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-50vh bg-black bg-opacity-80 box ${focusTerminal === id && 'bg-opacity-90'} `} >
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
