import MainLayout from "~/components/Layout/MainLayout";
import FormPaciente from "~/components/Pacientes/FormPaciente";
import { Section } from "~/components/UI";

const AgregarPacientesPage = () => {
	return (
		<MainLayout>
			<Section widthAuto>
				<FormPaciente />
			</Section>
		</MainLayout>
	);
};

export default AgregarPacientesPage;
