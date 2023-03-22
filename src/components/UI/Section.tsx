import { Box, Toolbar } from "@mui/material";
import type { FC, ReactNode } from "react";

interface IProps {
	children: ReactNode;
	widthAuto?: boolean;
}

export const Section: FC<IProps> = ({ children, widthAuto }) => {
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

			<Box
				sx={{
					width: widthAuto ? "auto" : "100%",
					height: "100%",
					backdropFilter: "blur(4px)",
					backgroundColor: "rgba(255, 255, 255, 0.9)",
					borderRadius: 6,
					boxShadow:
						"35px 35px 68px 0px rgba(63, 140, 228, 0.5), inset -6px -6px 16px 0px rgba(63, 140, 228, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);",
				}}
			>
				{children}
			</Box>
		</Box>
	);
};
