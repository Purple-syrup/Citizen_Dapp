import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Community, Create, Error, Explore, Landing, Vote } from "./routes";
import { MainUI, Scroll } from "./utils";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { WagmiProvider, createConfig, http } from "wagmi";
import { base, baseSepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { coinbaseWallet, injected } from "wagmi/connectors";
import "@coinbase/onchainkit/styles.css";

import Media from "react-media";

function App() {
	const UiLayout = () => {
			return (
				<>
					<Scroll />
					<MainUI />
					<Outlet />
				</>
			);
		},
		router = createBrowserRouter([
			{
				path: "/",
				element: <Landing />,
			},

			{
				path: "/",
				element: <UiLayout />,
				children: [
					{
						path: "/explore",
						element: <Explore />,
					},
					{
						path: "create",
						element: <Create />,
					},
					{
						path: "/active/vote/:id",
						element: <Vote />,
					},

					{
						path: "/past/vote/:id",
						element: <Vote />,
					},

					{
						path: `/communities`,
						element: <Community />,
					},
				],
			},

			{
				path: "*",
				element: <Error />,
			},
		]);

	const queryClient = new QueryClient(),
		chains = [base, baseSepolia],
		client = createConfig({
			chains: [baseSepolia],
			multiInjectedProviderDiscovery: true,
			connectors: [
				coinbaseWallet({
					appName: "citizen",
					preference: "smartWalletOnly", // set this to `all` to use EOAs as well
					version: "4",
				}),
				injected(),
			],
			ssr: true,
			transports: {
				[base.id]: http(),
				[baseSepolia.id]: http(),
			},
		});
	return (
		<>
			<WagmiProvider config={client}>
				<QueryClientProvider client={queryClient}>
					<OnchainKitProvider chain={baseSepolia}>
						<Media query={`(min-width:768px)`}>
							{(matches) => {
								return matches ? (
									<section className="app">
										<RouterProvider router={router} />
									</section>
								) : (
									<section className="query">
										<Error />
									</section>
								);
							}}
						</Media>
					</OnchainKitProvider>
				</QueryClientProvider>
			</WagmiProvider>
		</>
	);
}

export default App;
