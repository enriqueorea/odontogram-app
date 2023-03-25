import {
	Avatar,
	Box,
	Card,
	CardContent,
	Grid,
	Typography,
} from "@mui/material";
import { type FC } from "react";

export interface IOverviewCard {
	title: string;
	value: string;
	icon: JSX.Element;
}

type Props = {
	cards: IOverviewCard[];
};

const OverviewCard: FC<IOverviewCard> = ({ title, value, icon }) => {
	return (
		<Card
			sx={{
				width: 375,
				height: 150,
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
				<Box
					sx={{
						gap: 4,
						flexDirection: "row",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Avatar sx={{ width: 60, height: 60, bgcolor: "transparent" }}>
						{icon}
					</Avatar>
					<Box>
						<Typography
							className="text-slate-500 font-semibold "
							sx={{ fontSize: "24px" }}
							variant="h2"
						>
							{title}
						</Typography>
						<Typography className="text-4xl font-bold" variant="h3">
							{value}
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export const Overview: FC<Props> = ({ cards }) => {
	return (
		<Grid container item xs={12} spacing={4}>
			{cards.map((card) => (
				<Grid key={card.title} item>
					<OverviewCard {...card} />
				</Grid>
			))}
		</Grid>
	);
};
