/* eslint-disable @typescript-eslint/no-misused-promises */
import type {
	GetServerSidePropsContext,
	InferGetServerSidePropsType,
} from "next";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../server/auth";
import { Copyright } from "@mui/icons-material";
import {
	Grid,
	Paper,
	Avatar,
	Typography,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Button,
} from "@mui/material";
import { Box } from "@mui/system";

export default function SignIn({
	providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<Grid component={"main"} sx={{ height: "100dvh", display: "flex" }}>
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: "url('/login_image.png')",
					backgroundRepeat: "no-repeat",
					backgroundColor: (t) =>
						t.palette.mode === "light"
							? t.palette.grey[50]
							: t.palette.grey[900],
					backgroundSize: "cover",
					backgroundPosition: "center",
					flex: 1,
					filter: "brightness(0.7)",
				}}
			/>
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={10} square>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						flex: 0.4,
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<Box component="form" noValidate sx={{ mt: 1 }}>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<FormControlLabel
							control={<Checkbox value="remember" color="primary" />}
							label="Remember me"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign In
						</Button>

						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<Link href="#" variant="body2">
									{"Don't have an account? Sign Up"}
								</Link>
							</Grid>
						</Grid>
						{Object.values(providers).map((provider) => (
							<Button
								key={provider.name}
								onClick={() => signIn(provider.id)}
								fullWidth
								variant="contained"
								sx={{ mt: 2, mb: 2 }}
							>
								Sign in with {provider.name}
							</Button>
						))}
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions);

	// If the user is already logged in, redirect.
	// Note: Make sure not to redirect to the same page
	// To avoid an infinite loop!
	if (session) {
		return { redirect: { destination: "/" } };
	}

	const providers = await getProviders();

	return {
		props: { providers: providers ?? [] },
	};
}
