// index.ts
import { createTheme, type Theme } from "@mui/material";

const lightTheme: Theme = createTheme({
	palette: {
		mode: "light",
		primary: {
			main: "#3f51b5", // Azul personalizado para el tema claro
		},
		secondary: {
			main: "#f44336", // Rojo personalizado para el tema claro
		},
		background: {
			default: "rgba(38,115,184,.5);",
		},
	},

	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "none",
					color: "white",
					backgroundColor: "#3f51b5 !important",
					"&:hover": {
						backgroundColor: "#f44336 !important",
					},
				},
			},
		},
	},
});

const darkTheme: Theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#90caf9", // Azul personalizado para el tema oscuro
		},
		secondary: {
			main: "#ff5252", // Rojo personalizado para el tema oscuro
		},
	},
});

export { lightTheme, darkTheme };
