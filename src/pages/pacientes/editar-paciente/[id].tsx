import MainLayout from "~/components/Layout/MainLayout";
import FormPaciente from "~/components/Pacientes/FormPaciente";
import { Section } from "~/components/UI";

const EditarPacientesPage = () => {
	return (
		<MainLayout>
			<Section widthAuto>
				<FormPaciente title="Editar informacion del paciente" />
			</Section>
		</MainLayout>
	);
};

export default EditarPacientesPage;
