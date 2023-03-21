import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Toolbar,
} from "@mui/material";
import React, { useRef, type FC } from "react";
import { dentalDiagnoses, dentalProcedures } from "~/constants";
import { getToothFaceNameByInitial } from "~/utils/odontograma/toothFacesNames";
import { getToothNameByFDINumber } from "~/utils/odontograma/toothNames";
import { useUiStore } from "../../store/uiStore";
import { useOdontogramStore } from "../../store/odontogramStore";

// eslint-disable-next-line react/display-name
const Form: FC = () => {
	const uploadFileRef = useRef<HTMLInputElement>(null);
	const { toothCapturing } = useOdontogramStore();
	const toothName = getToothNameByFDINumber(toothCapturing.toothNumber);
	const fullFaceName = getToothFaceNameByInitial(toothCapturing.toothFace);
	const { toggleCapturing } = useUiStore();

	return (
		<Box
			sx={{
				height: "100dvh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: 4,
			}}
		>
			<Toolbar />
			<div className="bg-clay w-full h-full p-8 rounded-clay shadow-clay ">
				<h2 className="text-center mb-4 text-xl font-bold">
					Diente: {toothCapturing.toothNumber} - {toothName}
				</h2>
				<h3 className="text-center mb-4 text-lg font-medium">
					Cara: {toothCapturing.toothFace} - {fullFaceName}
				</h3>

				{/* Formulario */}
				<form className="space-y-4">
					<Box display={"flex"} gap={2}>
						<TextField
							id="outlined-basic"
							value={toothCapturing.toothNumber}
							disabled
							label="Número del diente"
							variant="outlined"
						/>
						<TextField
							id="outlined-basic"
							value={toothCapturing.toothFace}
							disabled
							label="Cara del diente"
							variant="outlined"
						/>
					</Box>

					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">
							{" "}
							Procedimientos:{" "}
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Procedimientos:"
						>
							{dentalProcedures.map((procedures) => (
								<MenuItem key={procedures.id} value={procedures.id}>
									{procedures.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>

					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">
							{" "}
							Diagnóstico:{" "}
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label="Diagnóstico"
						>
							{dentalDiagnoses.map((diagnosis) => (
								<MenuItem key={diagnosis.code} value={diagnosis.code}>
									{diagnosis.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>

					<FormControl fullWidth>
						<TextField
							id="outlined-basic"
							variant="outlined"
							label="Observaciones"
							multiline
							rows={8}
						/>
					</FormControl>
					<Box>
						<input ref={uploadFileRef} type="file" hidden />
						<Button
							variant="contained"
							onClick={() => uploadFileRef.current?.click()}
						>
							Anexa documentos
						</Button>
					</Box>

					<div>
						<label htmlFor="toothPresent" className="inline-flex items-center">
							<input
								id="toothPresent"
								type="checkbox"
								className="form-checkbox rounded text-primary focus:ring-1 focus:ring-primary transition-colors duration-default"
							/>
							<span className="ml-2">Diente presente</span>
						</label>
					</div>

					<button
						type="submit"
						className="w-full py-2 text-white shadow-xl bg-primary rounded-clay hover:bg-secondary active:bg-secondary focus:outline-none focus:ring-1 focus:ring-primary transition-colors duration-default"
					>
						Enviar
					</button>
					<button
						onClick={() => toggleCapturing()}
						className="w-full shadow-xl py-2 text-white bg-slate-400 rounded-clay hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-gray-300 transition-colors duration-default"
					>
						Cerrar
					</button>
				</form>
			</div>
		</Box>
	);
};

export default Form;
