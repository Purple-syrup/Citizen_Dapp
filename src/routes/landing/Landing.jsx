// import { useWeb3Modal } from "@web3modal/wagmi1/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { LandingArrow, LogoDark } from "../../assets/icons";
import { Scroll } from "../../utils";
import "./landing.scss";
// import '@coinbase/onchainkit/styles.css';
import {
    ConnectWallet,
    Wallet,
    WalletDropdown,
    WalletDropdownBasename, 
    WalletDropdownFundLink, 
    WalletDropdownLink, 
    WalletDropdownDisconnect,
  } from '@coinbase/onchainkit/wallet';
  import {
    Address,
    Avatar,
    Name,
    Identity,
    EthBalance, 
  } from '@coinbase/onchainkit/identity';
import { useAccount } from "wagmi";

const Landing = () => {
	// const { open } = useWeb3Modal();
	const { address, isConnected } = useAccount();

	const links = [
		{
			text: "Explore",
			href: "/explore",
		},
		{
			text: "Products",
			href: "/products",
		},
		{
			text: "About",
			href: "/about",
		},
		{
			text: "Features",
			href: "/features",
		},
		{
			text: "Proposals",
			href: "/proposals",
		},
		{
			text: "Communities",
			href: "/communities",
		},
		{
			text: "Contact",
			href: "/contact",
		},
	];

	useEffect(() => {});

	return (
		<section className="landing">
			<Scroll />

			<div className="navigation">
				<div className="logo">
					<span>
						<LogoDark />
					</span>
					<span>citizin</span>
				</div>

				<nav>
					<ul>
						{links.map((link, index) => (
							<li key={index}>
								<Link to={link.href}>{link.text}</Link>
							</li>
						))}
					</ul>
				</nav>

				<div className="cta">
					
					<Wallet >
  <ConnectWallet>
    <Avatar sizes="1"/>
    <Name />
  </ConnectWallet>
  <WalletDropdown>
    <Identity 
      className="px-4 pt-3 pb-2" 
      hasCopyAddressOnClick
      >
      <Avatar />
      <Name />
      <Address />
      <EthBalance />
    </Identity>
    <WalletDropdownBasename />
    <WalletDropdownLink
      icon="wallet"
      href="https://keys.coinbase.com"
      >
      Wallet
    </WalletDropdownLink>
    <WalletDropdownFundLink />
    <WalletDropdownDisconnect />
  </WalletDropdown>
</Wallet>
				</div>
			</div>

			<div className="header">
				<div>
					<div className="rectangles">
						<figure></figure>
						<figure></figure>
						<figure></figure>
					</div>

					<div className="content">
						<h1>
							on chain decision making made easy, vote on
							proposals and DAO governance
						</h1>

						<div>
							<Link>
								<span>
									<LandingArrow />
								</span>
							</Link>

							<p>
								Promoting community engagement in DAO governance
								and decision making on-chain, transparent voting
								and delegations. citizin is a decentralized and
								multichain access platform .
							</p>
						</div>
					</div>

					<div className="small-icons">
						<figure>
							<img src="/glassy.png" />
						</figure>
						<figure>
							<img src="/glassy.png" />
						</figure>
						<figure>
							<img src="/glassy.png" />
						</figure>
					</div>
				</div>
			</div>

			<div className="footer">
				<figure>
					<img src="/left-glassy.png" />
				</figure>

				<div>
					<button>
						<span></span>
						<Link to={"/explore"}>enter dapp</Link>
						<span></span>
					</button>

					<p>
						explore, monitor and vote on proposals, participate
						actively in DAO governance
					</p>

					<div>
						<div className="left">
							<span>
								<img src="/mg.png" />
							</span>
							<span>
								<img src="/multidao.png" />
							</span>
							<span>
								<img src="/bnb.png" />
							</span>
							<span>
								<img src="/moonbeam.jpg" />
							</span>
							<span>
								<img src="/nd.png" />
							</span>
							<span>
								<img src="/black.png" />
							</span>
						</div>
						<div className="right">
							<span>540+</span>
							<span>Active communities</span>
						</div>
					</div>

					<p>
						Over 540k communities use citizin to manage their DAO
						decision making, we have onboarded over 564k active
						users
					</p>
				</div>
			</div>
		</section>
	);
};

export default Landing;
