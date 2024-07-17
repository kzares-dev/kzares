import { GoVerified } from "react-icons/go";
import { SiGithub } from "react-icons/si";
import Image from "next/image";
import profilePic from "@/public/images/kzares-pic.png"
import { bio } from "@/lib/constants";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/kzares-dev",
			text: "@kzares-dev",
		},
		
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<Image
					src={profilePic}
					alt=""
					className="w-[120px] h-[120px] object-cover rounded-full border border-white"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-xl">Jorge A. Casares</h1>
						<GoVerified className="text-blue-500 text-xl" />
					</div>
					<p className="text-sm text-gray-400 font-bold">Join the world { new Date().getFullYear() - 2004 } years ago.</p>
				</div>
			</div>
			<p className="text-sm text-slate-400">
				{bio}
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
