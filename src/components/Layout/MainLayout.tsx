import { Box, Toolbar } from "@mui/material";
import type { FC, ReactNode } from "react";
import { Navbar, Sidebar } from "../UI";

interface Props {
	children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
	return (
		<Box sx={{ display: "flex" }}>
			<Navbar />
			<Sidebar />
			<Box
				component="main"
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === "light"
							? theme.palette.grey[100]
							: theme.palette.grey[900],
					flexGrow: 1,
					height: "100dvh",
					overflow: "auto",
				}}
			>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};

export default MainLayout;
