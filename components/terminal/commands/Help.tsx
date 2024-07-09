import React from "react";

type HelpCmd = {
	cmd: string;
	detail: string;
};
export default function Help() {
	const listOfHelpCommands: HelpCmd[] = [
		{ cmd: "ls", detail: "List of folders ( portfolio projects )" },
		{ cmd: "bio", detail: "Show bio information." },
		{ cmd: "skill", detail: "List of skills." },
		{ cmd: "contact", detail: "Contact information" },
		{ cmd: "ctrl + alt + t", detail: "Open new terminal" },
		{ cmd: "ctrl + l", detail: "To clear the history." },
		{ cmd: "exit", detail: "To close terminal" },

	];
	return (
		<div className="w-11/12 mx-auto">
			{listOfHelpCommands.map(({ cmd, detail }, index) => {
				return (
					<div className="flex items-center gap-20  mt-3 " key={index}>
						<h1 className="text-yellow-200 w-[150px]">{cmd}</h1>
						<p className="text-gray-300 ">{detail}</p>
					</div>
				);
			})}
		</div>
	);
}
