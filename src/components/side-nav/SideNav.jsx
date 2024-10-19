import './side-nav.scss';
import { Trending, Proposal, ProposalDropdown, CreateProposal, PastProposal, ActiveProposal, Analytics, DAO, VoteGraph, Community, CreateDAO, Other } from '../../assets/icons';
import { NavLink } from "react-router-dom";

const SideNav = () => {

    const

        chains = [
            {
                name: "moonbeam",
                members: 954,
                img: "/moonbeam.jpg"
            },
            {
                name: "chainlink",
                members: 600,
                img: "/chainlink.png"
            },
            {
                name: "BNB chain",
                members: 430,
                img: "/bnb.png"
            },
            {
                name: "multichain",
                members: 416,
                img: "/multidao.png"
            },
            {
                name: "wireshape",
                members: 317,
                img: "/wireshape.png"
            },
        ],

        navLinks = [
            {
                to: "/explore",
                text: `all proposals`,
                icon: <Proposal />,
                side: < ProposalDropdown />
            },
            {
                to: "/create",
                text: `create proposal`,
                icon: <CreateProposal />
            },
            {
                to: "/past",
                text: `past proposals`,
                icon: <PastProposal />
            },
            {
                to: "/active",
                text: `active proposals`,
                icon: <ActiveProposal />
            },
            {
                to: "/analytics",
                text: `analytics`,
                icon: <Analytics />
            },
            {
                to: "/dao",
                text: `DAO metrics`,
                icon: <DAO />
            },
            {
                to: "/graph",
                text: `vote graph`,
                icon: <VoteGraph />
            },
            {
                to: "/communities",
                text: `community`,
                icon: <Community />
            },
            {
                to: "/create-dao",
                text: `create DAO`,
                icon: <CreateDAO />
            },
            {
                to: "/other",
                text: `other`,
                icon: <Other />
            },
        ];



    return (
        <section className="sideNav">
            <div>

                <section className='top'>
                    <h4>
                        <span><Trending /></span>
                        <span>top communities</span>
                    </h4>

                    <div>
                        {
                            chains.map((chain, index) => {
                                const { name, members, img } = chain;

                                return (
                                    <div className='chain' key={index}>
                                        <span>
                                            <img src={img} />
                                        </span>

                                        <div>
                                            <span>{name}</span>
                                            <span>{members} members</span>
                                        </div>

                                        <span>
                                            <span>#</span>
                                            <span>{index + 1}</span>
                                        </span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </section>

                <hr />

                <section className='bottom'>
                    <ul>
                        {
                            navLinks.map((link, index) => {
                                const { to, text, icon, side } = link;

                                return (
                                    <li key={index}>
                                        <NavLink to={to}>
                                            <span>{icon}</span>

                                            <span>{text}</span>

                                            {side && <span>{side}</span>}
                                        </NavLink>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </section>

            </div>
        </section>
    );
};

export default SideNav;