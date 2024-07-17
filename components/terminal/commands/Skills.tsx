import { listOfSkills } from "@/lib/constants"

export default function Skills() {
	return (
		<div className="flex flex-wrap">
			{listOfSkills.map(({ Icon, text }, idx) => {
				return (
					<div className="w-fit p-1" key={idx}>
						<div className="flex justify-between mb-3">
							<div className="flex gap-1 items-center text-lg text-gray-300 p-2 border border-slate-500 border-1 rounded-md">
								<Icon/>
								<h1>{text}</h1>
							</div>
						</div>
			
					</div>
				);
			})}
		</div>
	);
}