import Bio from "@/components/terminal/commands/Bio";
import Contact from "@/components/terminal/commands/Contact";
import Help from "@/components/terminal/commands/Help";
import Ls from "@/components/terminal/commands/Ls";
import NotFound from "@/components/terminal/commands/NotFound";
import Skills from "@/components/terminal/commands/Skills";
import { CmdHistory } from "@/types";


function renderCmd(cmd: string): CmdHistory {
	switch (cmd) {
		case "help":
			return {
				cmd,
				Component: Help,
				time: "",
			};
		case "bio":
			return {
				cmd,
				Component: Bio,
				time: "",
			};
		case "skills":
			return {
				cmd,
				Component: Skills,
				time: "",
			};
		case "contact":
			return {
				cmd,
				Component: Contact,
				time: "",
			};
		case "ls":
			return {
				cmd,
				Component: Ls,
				time: ""
			}
		
		
		default:
			return {
				cmd,
				Component: NotFound,
				time: "",
			};
	}
}

export default renderCmd;
