// Odontogram.tsx
import React from "react";
import { Quadrant } from "./";

export const Odontogram = () => {
	return (
		<div className="w-full h-full mx-auto bg-[#E0F2F8] p-4 rounded-lg">
			<div className="flex flex-col md:flex-row justify-between w-full">
				<div className="md:w-1/2">
					<Quadrant quadrant={1} startTooth={11} />
					<Quadrant quadrant={4} startTooth={41} />
				</div>
				<div className="md:w-1/2">
					<Quadrant quadrant={2} startTooth={21} />
					<Quadrant quadrant={3} startTooth={31} />
				</div>
			</div>
		</div>
	);
};
