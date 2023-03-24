import { Fade, Slide } from "@mui/material";
import { type GetServerSidePropsContext, type NextPage } from "next";

import { Form } from "~/components/Odontogram/Form";
import MainLayout from "~/components/Layout/MainLayout";
import { Odontogram } from "~/components/Odontogram";
import { useUiStore } from "~/store/uiStore";
import { authOptions } from "~/server/auth";
import { getServerSession } from "next-auth/next";

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
							<Form />
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions);

	// If the user is already logged in, redirect.
	// Note: Make sure not to redirect to the same page
	// To avoid an infinite loop!
	if (!session) {
		return { redirect: { destination: "/auth/iniciar-sesion" } };
	}

	return {
		props: {},
	};
}

export default Home;
