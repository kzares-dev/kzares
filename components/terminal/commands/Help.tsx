import React from "react";

type HelpCmd = {
	cmd: string;
	detail: string;
};
export default function Help() {
	const listOfHelpCommands: HelpCmd[] = [
		{ cmd: "bio", detail: "Show bio information." },
		{ cmd: "experience", detail: "My codign journey" },
		{ cmd: "portfolio", detail: "Interesting side/personal project" },
		{ cmd: "skills", detail: "List of skills." },
		{ cmd: "contact", detail: "Contact information" },
		{ cmd: "ctrl + alt + t", detail: "Open new terminal" },
		{ cmd: "ctrl + l", detail: "To clear the history." },
		{ cmd: "exit", detail: "To close terminal" },

	];
	return (
		<div className="w-11/12 mx-auto">
			{listOfHelpCommands.map(({ cmd, detail }, index) => {
				return (
					<div className="flex items-center justify-between gap-20  mt-3 " key={index}>
						<h1 className="text-white text-sm font-mono bg-slate-500 rounded-md border px-2 py-1 min-w-[50px] ">{cmd}</h1>
						<p className="text-slate-200 font-mono text-sm">{detail}</p>
					</div>
				);
			})}
		</div>
	);
}
