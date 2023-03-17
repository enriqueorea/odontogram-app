// Quadrant.tsx
import React, { FC } from "react";
import { Tooth } from "./Tooth";

interface QuadrantProps {
	quadrant: number;
	startTooth: number;
}

export const Quadrant: FC<QuadrantProps> = ({ quadrant, startTooth }) => {
	const teeth = [];
	const isUpper = quadrant === 1 || quadrant === 2;
	const toothCount = 8;

	for (let i = 0; i < toothCount; i++) {
		teeth.push(
			<Tooth
				key={startTooth + i}
				toothNumber={
					quadrant === 1
						? startTooth + toothCount - i - 1
						: quadrant % 2 === 0
						? startTooth + toothCount - i - 1
						: startTooth + i
				}
			/>,
		);
	}

	return (
		<div
			className={`flex ${
				quadrant % 2 === 0 ? "flex-row-reverse" : "flex-row"
			} w-full`}
		>
			{teeth}
		</div>
	);
};
