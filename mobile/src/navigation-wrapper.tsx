import { createNativeStackNavigator } from "@react-navigation/native-stack";

/** PAGES **/
import { Home } from "./pages/home";
import { Controls } from "./pages/controls";

const Router = createNativeStackNavigator();

export const NavigationWrapper = () => {
	return (
		<Router.Navigator
			screenOptions={{
				gestureDirection: "horizontal",
				animation: "ios",
				headerShown: false,
				contentStyle: {
					paddingHorizontal: 12,
				},
			}}
		>
			<Router.Screen name="home" component={Home} />
			<Router.Screen name="controls" component={Controls} />
		</Router.Navigator>
	);
};
