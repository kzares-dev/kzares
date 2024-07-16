import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress"
import { IconType } from "react-icons";

interface ProgressBarProps {
	Icon: IconType;
	percentageValue: number;
	barWidth: string;
	text: string;
}

export default function ProgressBar({
	Icon,
	percentageValue,
	barWidth,
	text,
}: ProgressBarProps) {
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		setAnimate(true);
	}, []);
	return (
		<div className="-fit p-4">
			<div className={`${barWidth} flex justify-between mb-3`}>
				<div className="flex gap-1 items-center">
					<Icon className="text-3xl" />
					<h1>{text}</h1>
				</div>
			</div>
			
		</div>
	);
}
