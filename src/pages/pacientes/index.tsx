import { Box, Typography } from "@mui/material";
import React from "react";
import MainLayout from "~/components/Layout/MainLayout";
import { Section } from "~/components/UI";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
	{ field: "id", headerName: "ID", flex: 1 },
	{ field: "firstName", headerName: "First name", flex: 1 },
	{ field: "lastName", headerName: "Last name", flex: 1 },
	{ field: "age", headerName: "Age", flex: 1 },
];

const rows2 = [
	{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
	{ id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
	{ id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
	{ id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
	{ id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
];

const PacientesPage = () => {
	return (
		<MainLayout>
			<Section>
				<Typography
					fontSize={30}
					sx={{ ml: 5, mt: 2.5 }}
					component={"h1"}
					variant="h1"
				>
					Pacientes -
				</Typography>
				<Box sx={{ height: "auto", p: 5 }}>
					<DataGrid
						rowSelection={false}
						className="shadow-clay p-1 text-2xl"
						autoHeight
						rows={rows2}
						getRowHeight={() => "auto"}
						columns={columns}
					/>
				</Box>
			</Section>
		</MainLayout>
	);
};

export default PacientesPage;
