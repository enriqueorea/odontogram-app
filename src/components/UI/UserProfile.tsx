import {
	Tooltip,
	IconButton,
	Avatar,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { signOut, useSession } from "next-auth/react";
import { useState, type MouseEvent } from "react";

const settings = ["Logout"];

export const UserProfile = () => {
	const { data, status } = useSession();

	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	if (data === null || data === undefined) return <div>loading...</div>;

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title="Open settings">
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar alt={data.user.name ?? "user"} src={data?.user.image ?? ""} />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: "45px" }}
				id="menu-appbar"
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{settings.map((setting) => (
					<MenuItem key={setting} onClick={handleCloseUserMenu}>
						<Typography
							component={"button"}
							onClick={() => signOut()}
							textAlign="center"
						>
							{setting}
						</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
};
