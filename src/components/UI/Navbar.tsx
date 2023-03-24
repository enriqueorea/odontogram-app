import { Toolbar, IconButton, Typography, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, {
	type AppBarProps as MuiAppBarProps,
} from "@mui/material/AppBar";
import React from "react";
import { drawerWidth } from "~/constants/dental";
import { useUiStore } from "../../store/uiStore";
import { UserProfile } from ".";

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

export const Navbar = () => {
	const { isSidebarOpen, toggleSidebar } = useUiStore();

	return (
		<AppBar position="absolute" open={isSidebarOpen}>
			<Toolbar
				sx={{
					pr: "24px", // keep right padding when drawer closed
				}}
			>
				<IconButton
					edge="start"
					color="inherit"
					aria-label="open drawer"
					onClick={() => toggleSidebar()}
					sx={{
						marginRight: "36px",
						...(isSidebarOpen && { display: "none" }),
					}}
				>
					<MenuIcon />
				</IconButton>
				<Typography
					component="h1"
					variant="h6"
					color="inherit"
					noWrap
					sx={{ flexGrow: 1 }}
				>
					Dashboard
				</Typography>
				<UserProfile />
			</Toolbar>
		</AppBar>
	);
};
