import { Card, CardContent, Grid, Toolbar } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import React, { useState } from "react";
import { Overview } from "~/components/Dashboard";
import MainLayout from "~/components/Layout/MainLayout";
import { SmileLoader } from "~/components/UI";

const cards = [
	{
		title: "Total Patients",
		value: "100",
		icon: <PeopleAltIcon sx={{ width: 60, height: 60, color: "#3f51b5" }} />,
	},
	{
		title: "Total Appointments",
		value: "100",
		icon: (
			<CalendarMonthIcon sx={{ width: 60, height: 60, color: "#3f51b5" }} />
		),
	},
	{
		title: "Total Revenue",
		value: `$${32000}`,
		icon: <AttachMoneyIcon sx={{ width: 60, height: 60, color: "#3f51b5" }} />,
	},
];

const DashboardPage = () => {
	const [isLoadign, setIsLoading] = useState(true);
	return (
		<MainLayout>
			<Toolbar />
			<Grid spacing={5} container sx={{ p: 3 }}>
				<Overview cards={cards} />
				<Grid item xs={6}>
					<Card
						sx={{
							width: "auto",
							height: 350,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							minWidth: 275,
							backdropFilter: "blur(4px)",
							backgroundColor: "rgba(255, 255, 255, 1)",
							borderRadius: "23px",
							boxShadow:
								"0px 35px 68px 0px rgba(145, 192, 255, 0.5), inset 0px -3px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)",
						}}
					>
						<CardContent>
							{isLoadign ? <SmileLoader /> : <div>hello</div>}
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Card
						sx={{
							width: "auto",
							height: 350,
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							minWidth: 275,
							backdropFilter: "blur(4px)",
							backgroundColor: "rgba(255, 255, 255, 1)",
							borderRadius: "23px",
							boxShadow:
								"0px 35px 68px 0px rgba(145, 192, 255, 0.5), inset 0px -3px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255)",
						}}
					>
						<CardContent>
							{isLoadign ? <SmileLoader /> : <div>hello</div>}
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</MainLayout>
	);
};

export default DashboardPage;
