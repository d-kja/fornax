import type { Navigation } from "../types/navigation";

import { Footer } from "../components/footer";
import { Header } from "../components/header";

import { Button } from "tamagui";
import { Container } from "../components/container";

export const Home = ({ navigation, route }: Navigation) => {
	return (
		<Container>
      <Header>Escolha um canal</Header>

			<Button onPress={() => navigation.push("controls")}>
				Navigate to Controls
			</Button>

			<Footer navigation={navigation} route={route} />
		</Container>
	);
};