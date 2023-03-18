import { type NextPage } from "next";
import { Form } from "~/components/Form";
import MainLayout from "~/components/Layout/MainLayout";
import { Odontogram } from "~/components/Odontogram";

const Home: NextPage = () => {
	return (
		<MainLayout>
			<Odontogram />
			<Form />
		</MainLayout>
	);
};

export default Home;
