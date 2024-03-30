import type { ReactNode } from "react";

import { View } from "tamagui";

interface ContainerProps {
	children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
	return (
		<View flexDirection="column" justifyContent="space-between" flex={1}>
			{children}
		</View>
	);
};
