export const

    communities = [
        {
            id: 0,
            img: "/moonbeam.jpg",
            title: "Moonbeam DAO",
            comment: `Moonbeam is more than an EVM implementation, it’s a highly specialized layer 1 chain that mirrors ethereum’s web3 RPC`,
            members: 954
        },

        {
            id: 1,
            img: "/chainlink.png",
            title: "Chainlink  DAO",
            comment: `Chainlink is the industry standard web3 services platform people, businesses and data`,
            members: 600
        },

        {
            id: 2,
            img: "bnb.png",
            title: "BNB Chain DAO",
            comment: `Building products and toolings in web3 on the binance chain`,
            members: 430
        },

        {
            id: 3,
            img: "multidao.png",
            title: "Multichain  DAO",
            comment: `Multichain is a decentralized autonomous organization building multichain infrastructure`,
            members: 416
        },

        {
            id: 4,
            img: "wireshape.png",
            title: "Wireshape DAO",
            comment: `Modern product information standard to drive the creation of new generation ecommerce`,
            members: 317
        },

        {
            id: 5,
            img: "mg.png",
            title: "Metaguild DAO",
            comment: `Maximize your gaming reward, earn weekly by participating in competitions`,
            members: 254
        },
    ],

    // ! <====================== new object here! ==========================>

    cards = [
        {
            id: 0,
            img: "/multidao.png",
            company: "Multichain",
            title: `MultiBTC Adoption Proposal`,
            text: `A decentralized autonomous organization building multichain verse merging for all ecosystem and blockchains. We are the lea...`,
            status: {
                active: true,
                days: 6
            },
            vote: {
                count: 800,
                red: 5,
                green: 79,
                blue: null,
                images: [
                    "/profile-1.jpg",
                    "/profile-2.jpg",
                    "/profile-3.jpg",
                    "/profile-4.jpg",
                ],
                proposals: [
                    {
                        q: `I agree to metaguild building a metaverse`,
                        v: 183,
                        c: "E03D3D"
                    },
                    {
                        q: `I disagree to metaguild building a metaverse`,
                        v: 235,
                        c: "3DE04D"
                    },
                    {
                        q: `Let’s build one but on private beta`,
                        v: 121,
                        c: "4A3DE0"
                    }
                ],
            },
        },

        {
            id: 1,
            img: "/wireshape.png",
            company: "Wireshape DAO",
            title: `Treasury Proposal`,
            text: `Modern product information standard to drive the creation of the new generation of decentralized ecommecers through open sou...`,
            status: {
                active: false,
                days: null
            },
            vote: {
                count: 950,
                red: 15,
                green: 85,
                blue: null,
                images: [
                    "/profile-4.jpg",
                    "/profile-5.jpg",
                    "/profile-6.png",
                    "/profile-7.png",
                    "/profile-8.jpg",
                ],
                proposals: [
                    {
                        q: `I agree to metaguild building a metaverse`,
                        v: 183,
                        c: "E03D3D"
                    },
                    {
                        q: `I disagree to metaguild building a metaverse`,
                        v: 235,
                        c: "3DE04D"
                    },
                    {
                        q: `Let’s build one but on private beta`,
                        v: 121,
                        c: "4A3DE0"
                    }
                ],
            }
        },

        {
            id: 2,
            img: "/nd.png",
            company: "Archimedes",
            title: `Chain Validators Proposal`,
            text: `Archimedes selects battle tested yield bearing stable coins and leverages them up to 10x, producing a top of market Apy, posit...`,
            status: {
                active: true,
                days: 2
            },
            vote: {
                count: 765,
                red: null,
                green: 80,
                blue: 3,
                images: [
                    "/profile-11.jpg",
                    "/profile-12.jpg",
                    "/profile-1.jpg",
                    "/profile-5.jpg",
                ],
                proposals: [
                    {
                        q: `I agree to metaguild building a metaverse`,
                        v: 183,
                        c: "E03D3D"
                    },
                    {
                        q: `I disagree to metaguild building a metaverse`,
                        v: 235,
                        c: "3DE04D"
                    },
                    {
                        q: `Let’s build one but on private beta`,
                        v: 121,
                        c: "4A3DE0"
                    }
                ],
            }
        },

        {
            id: 3,
            img: "/peeq.png",
            company: "Peaq Network",
            title: `Physical Infrastructure`,
            text: `Through peaq control your web3 machine command and control center, you can link your raspberry Pi’s with peaq testnet and use ...`,
            status: {
                active: true,
                days: 13
            },
            vote: {
                count: 45,
                red: null,
                green: "7",
                blue: null,
                images: [
                    "/profile-7.png",
                    "/profile-9.jpg",
                ],
                proposals: [
                    {
                        q: `I agree to metaguild building a metaverse`,
                        v: 183,
                        c: "E03D3D"
                    },
                    {
                        q: `I disagree to metaguild building a metaverse`,
                        v: 235,
                        c: "3DE04D"
                    },
                    {
                        q: `Let’s build one but on private beta`,
                        v: 121,
                        c: "4A3DE0"
                    }
                ],
            }
        },

        {
            id: 4,
            img: "/moonbeam.jpg",
            company: "Mooonbeam",
            title: `Grants and Sponsors Proposal`,
            text: `Moonbeam is more than an EVM implementation, it’s a highly specialized layer1 chain that mirrors ethereum’s web3 RPC, ac...`,
            status: {
                active: true,
                days: 9
            },
            vote: {
                count: 321,
                red: null,
                green: 25,
                blue: null,
                images: [
                    "/profile-2.jpg",
                    "/profile-6.png",
                    "/profile-4.jpg",
                    "/profile-3.jpg",
                ],
                proposals: [
                    {
                        q: `I agree to metaguild building a metaverse`,
                        v: 183,
                        c: "E03D3D"
                    },
                    {
                        q: `I disagree to metaguild building a metaverse`,
                        v: 235,
                        c: "3DE04D"
                    },
                    {
                        q: `Let’s build one but on private beta`,
                        v: 121,
                        c: "4A3DE0"
                    }
                ],
            }
        },

        {
            id: 5,
            img: "/bnb.png",
            company: "Bnb chain",
            title: `Allow Defi Boilerplates`,
            text: `For boilerplates related to defi tools and dapp development, the templates should contain minimum required tools already confi...`,
            status: {
                active: false,
                days: null
            },
            vote: {
                count: 874,
                red: 30,
                green: 70,
                blue: null,
                images: [
                    "/profile-12.jpg",
                    "/profile-11.jpg",
                    "/profile-10.png",
                    "/profile-9.jpg",
                ],
                proposals: [
                    {
                        q: `I agree to metaguild building a metaverse`,
                        v: 183,
                        c: "E03D3D"
                    },
                    {
                        q: `I disagree to metaguild building a metaverse`,
                        v: 235,
                        c: "3DE04D"
                    },
                    {
                        q: `Let’s build one but on private beta`,
                        v: 121,
                        c: "4A3DE0"
                    }
                ],
            }
        },

        {
            id: 6,
            img: "/mg.png",
            company: "Metaguild",
            title: `Metaverse Proposal`,
            text: `Metaverse guild that maximizes your gaming rewards, earn weekly by participating in competitions and game beta test...`,
            status: {
                active: true,
                days: 3
            },
            vote: {
                count: 539,
                red: 16,
                green: 48,
                blue: 4,
                images: [
                    "/profile-12.jpg",
                    "/profile-11.jpg",
                    "/profile-10.png",
                    "/profile-7.png",
                    "/profile-5.jpg",
                    "/profile-3.jpg",
                ],
                proposals: [
                    {
                        q: `I agree to metaguild building a metaverse`,
                        v: 183,
                        c: "E03D3D"
                    },
                    {
                        q: `I disagree to metaguild building a metaverse`,
                        v: 235,
                        c: "3DE04D"
                    },
                    {
                        q: `Let’s build one but on private beta`,
                        v: 121,
                        c: "4A3DE0"
                    }
                ],
            },
        },

        {
            id: 7,
            img: "/chainlink.png",
            company: "Chainlink",
            title: `Data Providers Proposal`,
            text: ` Chainlink is the industry-standard web3 services platform connecting the people, business, and data of today with the ...`,
            status: {
                active: true,
                days: 8
            },
            vote: {
                count: 882,
                red: null,
                green: 77,
                blue: null,
                images: [
                    "/profile-8.jpg",
                    "/profile-7.png",
                    "/profile-6.png",
                    "/profile-5.jpg",
                ],
                proposals: [
                    {
                        q: `I agree to metaguild building a metaverse`,
                        v: 183,
                        c: "E03D3D"
                    },
                    {
                        q: `I disagree to metaguild building a metaverse`,
                        v: 235,
                        c: "3DE04D"
                    },
                    {
                        q: `Let’s build one but on private beta`,
                        v: 121,
                        c: "4A3DE0"
                    }
                ],
            }
        },

        {
            id: 9,
            img: "/multidao.png",
            company: "Bankless DAO",
            title: `Allocation Of Airdrops`,
            text: ` Bankless is a movement for pioneers seeking liberation from the tyranny of the traditional financial system, going ... `,
            status: {
                active: true,
                days: 3
            },
            vote: {
                count: 956,
                red: null,
                green: 91,
                blue: null,
                images: [
                    "/profile-4.jpg",
                    "/profile-3.jpg",
                    "/profile-2.jpg",
                    "/profile-1.jpg",
                ],
                proposals: [
                    {
                        q: `I agree to metaguild building a metaverse`,
                        v: 183,
                        c: "E03D3D"
                    },
                    {
                        q: `I disagree to metaguild building a metaverse`,
                        v: 235,
                        c: "3DE04D"
                    },
                    {
                        q: `Let’s build one but on private beta`,
                        v: 121,
                        c: "4A3DE0"
                    }
                ],
            }
        },
    ];

    // ! <====================== new object here! ==========================>

    // proposals = [
    //     {
    //         id: 6,
    //         questions: [
    //             `I agree to metaguild building a metaverse`,
    //             `I disagree to metaguild building a metaverse`,
    //             `Let’s build one but on private beta`
    //         ]
    //     }
    // ];