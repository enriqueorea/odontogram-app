// Odontogram.tsx
import { Box, Toolbar } from "@mui/material";
import React from "react";
import { Quadrant } from "./";

export const Odontogram = () => {
	return (
		<Box
			sx={{
				minHeight: "100dvh",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: 4,
			}}
		>
			<Toolbar />
			<div className="bg-white w-full min-h-full p-8 rounded-3xl shadow-clay border border-gray-200">
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", md: "row" },
						justifyContent: "between",
						alignItems: "center",
						width: "100%",
					}}
				>
					<Box sx={{ flex: { md: "1" } }}>
						<Quadrant quadrant={1} startTooth={11} />
						<Quadrant quadrant={4} startTooth={41} />
					</Box>
					<Box sx={{ flex: { md: "1" } }}>
						<Quadrant quadrant={2} startTooth={21} />
						<Quadrant quadrant={3} startTooth={31} />
					</Box>
				</Box>
			</div>
		</Box>
	);
};
