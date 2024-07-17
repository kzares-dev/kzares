import { contacts } from "@/lib/constants"

export default function Contact() {

	return (
		<div className="flex flex-col w-11/12 mx-auto gap-2">
			{contacts.map(({ text, value, href, Icon }, index) => {
				return (
					<div className="flex items-center justify-between  t-3" key={index}>
						<h1 className="text-white-200 w-full gap-2 max-w-[20rem] flex flex-row items-center">
							<Icon />
							{text}
						</h1>
						<a href={href} className="flex-1 text-[18px] font-mono underline text-blue-500 ">
							{value}
						</a>
					</div>
				);
			})}
		</div>
	);
}
