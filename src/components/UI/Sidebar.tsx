import {
	Divider,
	IconButton,
	List,
	ListItemIcon,
	ListItemText,
	ListItemButton,
	styled,
	Toolbar,
	Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { drawerWidth } from "~/constants/dental";
import MuiDrawer from "@mui/material/Drawer";

import DashboardIcon from "@mui/icons-material/Dashboard";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { useUiStore } from "~/store/uiStore";

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	"& .MuiDrawer-paper": {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		boxSizing: "border-box",
		...(!open && {
			overflowX: "hidden",
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			}),
			width: theme.spacing(7),
			[theme.breakpoints.up("sm")]: {
				width: theme.spacing(9),
			},
		}),
	},
}));

export const Sidebar = () => {
	const { isSidebarOpen, toggleSidebar } = useUiStore();
	return (
		<Drawer variant="permanent" open={isSidebarOpen}>
			<Toolbar
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-start",
					px: [1],
				}}
			>
				<IconButton onClick={() => toggleSidebar()}>
					<ChevronLeftIcon />
				</IconButton>
				<Typography variant="h6" noWrap component="div">
					Odontogram
				</Typography>
			</Toolbar>
			<Divider />
			<List component="nav">
				<ListItemButton LinkComponent={"a"} href="/dashboard">
					<ListItemIcon>
						<DashboardIcon />
					</ListItemIcon>
					<ListItemText primary="Dashboard" />
				</ListItemButton>
				<ListItemButton LinkComponent={"a"} href="/agenda">
					<ListItemIcon>
						<DateRangeIcon />
					</ListItemIcon>

					<ListItemText primary="Agenda" />
				</ListItemButton>
				<ListItemButton LinkComponent={"a"} href="/pacientes">
					<ListItemIcon>
						<PeopleIcon />
					</ListItemIcon>
					<ListItemText primary="Pacientes" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<BarChartIcon />
					</ListItemIcon>
					<ListItemText primary="Odontogramas" />
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<LayersIcon />
					</ListItemIcon>
					<ListItemText primary="Consultas" />
				</ListItemButton>
				<Divider sx={{ my: 1 }} />
			</List>
		</Drawer>
	);
};
