import 'react-native-gesture-handler';
import "@tamagui/core/reset.css";

import { useFonts } from "@expo-google-fonts/inter";
import { config } from "./tamagui.config";

import { StatusBar } from "expo-status-bar";
import { TamaguiProvider } from "@tamagui/core";

import { NavigationContainer } from "@react-navigation/native";
import { NavigationWrapper } from "./src/navigation-wrapper";

function App() {
	const [loaded] = useFonts({
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
	});

	if (!loaded) return null;

	return (
		<TamaguiProvider config={config}>
			<NavigationContainer>
				<NavigationWrapper />
				<StatusBar style="auto" />
			</NavigationContainer>
		</TamaguiProvider>
	);
}

export default App;
