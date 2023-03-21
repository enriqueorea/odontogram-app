import { Box } from "@mui/material";
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
					flexGrow: 1,
					height: "100dvh",
					overflow: "auto",
				}}
			>
				{children}
			</Box>
		</Box>
	);
};

export default MainLayout;
