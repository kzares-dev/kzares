import { experience } from "@/lib/constants"

export default function Experience () {
    return <div className="flex gap-2 flex-col my-0">
            {experience.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 px-5 py-4 relative bg-white/5  rounded-md">

                    <div className="absolute left-1 top-0 bottom-0 w-[2px] bg-white rounded-md">
                        <div className="w-5 h-5 -ml-2 rounded-full bg-white"/>
                    </div>

                    <h2 className="text-sm font-mono font-bold text-slate-500"> {item.date} </h2>
                    <h1 className="text-lg text-white">{item.role}</h1>
                    <p className="text-[15px] text-gray-400 font-sans"> {item.description} </p>
                </div>
            ))}
         </div>
}