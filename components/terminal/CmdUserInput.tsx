import React, { useEffect, useRef, useState } from "react";
import BaseCmdInput from "./BaseCmdInput";
interface CmdUserInputProp {
	onSubmit: (cmd: string) => void;
	focusTerminal: number,
	id: number,
}
export default function CmdUserInput({ onSubmit, focusTerminal, id }: CmdUserInputProp) {
	const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
	const [showFakeCursor, setShowFakeCursor] = useState(false);
	const [prevCmd, setPrevCmd] = useState<string[]>([]);
	const [prevCmdIndex, setPrevCmdIndex] = useState(-1);

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const value = inputRef.current.value;
		onSubmit(value);
		if (value.trim()) {
			setPrevCmd((currentValue) => [value, ...currentValue]);
		}
		setPrevCmdIndex(-1);
	};
	

	return (
		<BaseCmdInput
			Children={
				<form onSubmit={handleSubmit} className="w-full flex items-center">
					{showFakeCursor && (
						<div className=" w-1 h-5 animate-blink bg-white translate-y-2 -translate-x-3"></div>
					)}
					<input
						className="translate-y-2 -translate-x-3 bg-inherit w-full focus:outline-none placeholder:text-gray-600 placeholder:tracking-wider"
						
						onFocus={() => {
							setShowFakeCursor(true);
						}}
						ref={inputRef}
						placeholder="try help , bio , skill , contact..."
					/>
				</form>
			}
		/>
	);
}
