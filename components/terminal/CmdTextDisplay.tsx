interface CmdTextDisplayProp {
	cmd: string;
}
export default function CmdTextDisplay({ cmd }: CmdTextDisplayProp) {
	return (
		<div className="flex justify-between items-center translate-y-2 -translate-x-3 w-full">
			<h1 className="text-[15px] font-mono font-bold">{cmd}</h1>
		</div>
	);
}
