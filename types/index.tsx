export type CmdHistory = {
	cmd: string;
	Component: () => JSX.Element;
};

export type command = {
	cmd: string,
	Component: () => React.JSX.Element,
}

export interface TerminalBoxProps {
	commands: command[],
	id: number,
	position: {
		x: number,
		y: number,
	}
}