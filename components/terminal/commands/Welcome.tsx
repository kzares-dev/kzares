import { IoTerminal } from "react-icons/io5";
export default function Welcome() {
	return (
		<div className="flex flex-row justify-between">
			<div>
			<h1 className=" font-mono text-[60px] font-bold uppercase py-4">Welcome</h1>
			<h2 className="pl-5 text-sm font-bold text-gray-4 00">to Jorge Casares Portfolio</h2>
		</div>

		<div className="flex flex-row items-center gap-2 text-sm text-white font-mono bg-slate-500 border rounded-md p-3 h-fit">
			<IoTerminal />
			try `help` command
		</div>
		</div>
	);
}
