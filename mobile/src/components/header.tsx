import type { ReactNode } from "react";
import { H1, View } from "tamagui";

interface HeaderProps {
	children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
	return (
		<View
			backgroundColor={"#f4f4f5"}
			shadowColor="#a1a1aa"
			elevationAndroid={20}
			mt="$8"
			px={"$4"}
			py={"$4"}
			borderRadius={"$4"}
		>
			<H1 fontSize={"$10"} letterSpacing={"$6"} color={"#71717a"}>
				{children}
			</H1>
		</View>
	);
};
