import { Box } from "@mui/material";
import React from "react";

export const Form = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				width: "100%",
				backgroundColor: "primary.main",
				color: "primary.contrastText",
			}}
		>
			<h1>Form</h1>
		</Box>
	);
};
