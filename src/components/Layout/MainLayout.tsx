import { Box } from "@mui/material";
import Head from "next/head";
import type { FC, ReactNode } from "react";
import { Navbar, Sidebar } from "../UI";

interface Props {
	children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Odonto Home Page</title>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>

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
		</>
	);
};

export default MainLayout;
