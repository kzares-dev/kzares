import React, { useEffect, useRef, useState } from "react";
import BaseCmdInput from "./BaseCmdInput";
interface CmdUserInputProp {
	onSubmit: (cmd: string) => void;
	focusTerminal: number,
	id: number,
	inputRef: React.MutableRefObject<HTMLInputElement>
}
export default function CmdUserInput({ onSubmit, focusTerminal, id, inputRef }: CmdUserInputProp) {
	const [showFakeCursor, setShowFakeCursor] = useState(false);
	const [prevCmd, setPrevCmd] = useState<string[]>([]);
	const [prevCmdIndex, setPrevCmdIndex] = useState(-1);

	// this is the funcionality to type commands
	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const value = inputRef.current.value;
		onSubmit(value);
		if (value.trim()) {
			setPrevCmd((currentValue) => [value, ...currentValue]);
		}
		setPrevCmdIndex(-1);
		inputRef.current.value = "";
	};

	// Pressing arrow up & arrow down
	useEffect(() => {
		if (focusTerminal === id) {
			setShowFakeCursor(true);

		} else {
			// set the focus to unfocus	
			setShowFakeCursor(false)
		}
	}, [focusTerminal])


	return (
		<BaseCmdInput
			Children={
				<form onSubmit={handleSubmit} className="w-full flex items-center">
					{showFakeCursor && (
						<div className=" w-1 h-5 animate-blink bg-white translate-y-2 -translate-x-3"></div>
					)}
					<input
						className="translate-y-2 -translate-x-3 bg-inherit w-full focus:outline-none placeholder:text-gray-600 placeholder:tracking-wider"
						ref={inputRef}
						autoFocus
						placeholder="try help , bio , skill , contact..."
					/>

				</form>
			}
		/>
	);
}
