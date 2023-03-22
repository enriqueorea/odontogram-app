import {
	Container,
	Box,
	Typography,
	Grid,
	TextField,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	Button,
} from "@mui/material";
import type { FC } from "react";
import { estadosMexico } from "~/constants";
import "../../constants/countries";
import { countries } from "../../constants/countries";
interface FormPacienteProps {
	isEdditing?: boolean;
	//patient?: Patient;
	title?: string;
}

const FormPaciente: FC<FormPacienteProps> = ({
	title = "Registrar paciente",
}) => {
	return (
		<Container maxWidth="sm">
			<Box sx={{ marginBottom: 4 }}>
				<Typography variant="h4" component="h1">
					{title}
				</Typography>
			</Box>
			<form>
				<Typography variant="h6" component="h2" gutterBottom>
					Información personal
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="firstName"
							label="Primer nombre"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							fullWidth
							id="secondName"
							label="Segundo nombre"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="lastName"
							label="Apellido paterno"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="motherLastName"
							label="Apellido materno"
							variant="outlined"
						/>
					</Grid>
				</Grid>
				<Typography
					variant="h6"
					component="h2"
					gutterBottom
					sx={{ marginTop: 3 }}
				>
					Información de nacimiento
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							required
							fullWidth
							id="birthdate"
							label="Fecha de nacimiento"
							type="date"
							variant="outlined"
							InputLabelProps={{ shrink: true }}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="nationality"
							label="Nacionalidad"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Select
							id="countryOfBirth"
							fullWidth
							label="País de nacimiento"
							value={""}
						>
							{countries.map((country) => (
								<MenuItem key={country.cca2} value={country.name}>
									{country.name}
								</MenuItem>
							))}
						</Select>
					</Grid>
					<Grid item xs={12}>
						<Select id="birthEntity" fullWidth label="Entidad" value={""}>
							{estadosMexico.map((entity) => (
								<MenuItem key={entity.id} value={entity.nombre}>
									{entity.nombre}
								</MenuItem>
							))}
						</Select>
					</Grid>
				</Grid>

				<Typography
					variant="h6"
					component="h2"
					gutterBottom
					sx={{ marginTop: 3 }}
				>
					Información de identidad y contacto
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<FormControl fullWidth variant="outlined" required>
							<InputLabel htmlFor="sex">Sexo</InputLabel>
							<Select value={""} id="sex" label="Sexo">
								<MenuItem value="male">Masculino</MenuItem>
								<MenuItem value="female">Femenino</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormControl fullWidth variant="outlined" required>
							<InputLabel htmlFor="gender">Género</InputLabel>
							<Select id="gender" label="Género" value={""}>
								<MenuItem value="cisgender">Cisgénero</MenuItem>
								<MenuItem value="transgender">Transgénero</MenuItem>
								<MenuItem value="nonbinary">No binario</MenuItem>
								<MenuItem value="other">Otro</MenuItem>
								<MenuItem value="preferNotToSay">Prefiero no decirlo</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="phoneNumber"
							label="Número de teléfono"
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							fullWidth
							id="email"
							label="Correo electrónico"
							type="email"
							variant="outlined"
						/>
					</Grid>
				</Grid>

				<Box sx={{ marginTop: 3 }}>
					<Button
						title={title}
						variant="contained"
						color="primary"
						type="submit"
					>
						{title}
					</Button>
				</Box>
			</form>
		</Container>
	);
};

export default FormPaciente;
