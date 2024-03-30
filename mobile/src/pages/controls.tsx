import type { Navigation } from "../types/navigation";

import { Header } from "../components/header";
import { Footer } from "../components/footer";

import { Button } from "tamagui";
import { Container } from "../components/container";

export const Controls = ({ navigation, route }: Navigation) => {
	return (
		<Container>
			<Header>Controles da TV</Header>

			<Button onPress={() => navigation.navigate("home")}>Navigate to Home</Button>

			<Footer navigation={navigation} route={route} />
		</Container>
	);
};
