export type CmdHistory = {
	cmd: string;
	Component: () => JSX.Element;
	time: string;
};

export type command = {
	cmd: string,
	Component: () => React.JSX.Element,
	time: string
}

export interface TerminalBoxProps {
	commands: command[],
	id: number,
	position: {
		x: number,
		y: number,
	}
}