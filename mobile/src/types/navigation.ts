import type { ParamListBase, RouteProp } from "@react-navigation/native";

export type Navigation = {
	// biome-ignore lint/suspicious/noExplicitAny: current typing for this type of this is just extending the keys from ParamsListBase
	route: RouteProp<ParamListBase, any>;
	// biome-ignore lint/suspicious/noExplicitAny: multiple possible types
	navigation: any;
};
