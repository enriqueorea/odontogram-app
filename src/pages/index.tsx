import { Fade, Slide } from "@mui/material";
import { type NextPage } from "next";

import { Form } from "~/components/Form";
import MainLayout from "~/components/Layout/MainLayout";
import { Odontogram } from "~/components/Odontogram";
import { useUiStore } from "~/store/uiStore";

const Home: NextPage = () => {
	const { isCapturing } = useUiStore();

	return (
		<MainLayout>
			{/* Si isCapturing es true el navegador debera desplazar la pantalla hacia el formulario */}

			{
				// Si isCapturing es true, se muestra el formulario
				isCapturing ? (
					<Slide
						timeout={800}
						direction="up"
						in={isCapturing}
						mountOnEnter
						unmountOnExit
					>
						<div
							style={{
								minHeight: "1px",
							}}
						>
							<Form face="B" toothNumber={11} />
						</div>
					</Slide>
				) : (
					<Fade timeout={800} in={!isCapturing}>
						<div
							style={{
								minHeight: "1px",
							}}
						>
							<Odontogram />
						</div>
					</Fade>
				)
			}
		</MainLayout>
	);
};

export default Home;
