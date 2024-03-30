import type { Navigation } from "../types/navigation";

import { Button, View } from "tamagui";

import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface FooterProps extends Navigation {}

export const Footer = ({ navigation, route }: FooterProps) => {
	return (
		<View
			mx="$-8"
			py={"$4"}
			px={"$8"}
			backgroundColor={"#f4f4f5"}
			elevationAndroid={10}
			shadowColor="#3f3f46"
			borderRadius={"$4"}
		>
			<View
				mx="auto"
				flexDirection="row"
				justifyContent="space-between"
				gap="$8"
			>
				<Button
          borderColor={route.name === "home" ? "#818cf8" : "$colorTransparent"}
          borderWidth={"$1.5"}
          px="$4"
          height={"$6"}
          backgroundColor={"$colorTransparent"}
					onPress={() => navigation.navigate("home")}
				>
					<Entypo name="home" size={32} color={route.name === "home" ? "#818cf8" : "#a1a1aa"} />
				</Button>

				<Button
          borderColor={route.name === "controls" ? "#818cf8" : "$colorTransparent"}
          borderWidth={"$1.5"}
          px="$4"
          height={"$6"}
          backgroundColor={"$colorTransparent"}
					onPress={() => navigation.navigate("controls")}
				>
					<MaterialIcons name="control-camera" size={32} color={route.name === "controls" ? "#818cf8" : "#a1a1aa"} />
				</Button>
			</View>
		</View>
	);
};
