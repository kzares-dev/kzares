"use client"
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import TodayDate from "./TodayDate";
import Welcome from "./commands/Welcome";
import Help from "./commands/Help";
import EnteredCmd from "./EnteredCmd";
import CmdUserInput from "./CmdUserInput";
import renderCmd from "@/lib/renderCmd"
import { Rnd } from "react-rnd"
import { TerminalBoxProps, command } from "@/types";



export default function TerminalBox({ commands, position }: TerminalBoxProps) {
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
		document.body.addEventListener("keydown", handleKeyEvent);
	}, []);
	const handleKeyEvent = (e: KeyboardEvent) => {
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

	return (
		<Rnd
			default={{
				x: centerX,
				y: centerY,
				width: "896",
				height: "0",
			}}
		>
			<Navbar />
			<div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-50vh bg-black bg-opacity-75 box">
				<TodayDate />
				<EnteredCmd enteredCmd={enteredCmd} />
				<CmdUserInput onSubmit={handleSubmit} />
				<div ref={dummyRef}></div>


			</div>
		</Rnd>


	);
}
