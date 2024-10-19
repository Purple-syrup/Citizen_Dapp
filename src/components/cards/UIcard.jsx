import './ui-card.scss';
import { ActiveContributors, RegisteredDAO, ActiveProposalsCard, Search } from "../../assets/icons";

const
    InfoCard = ({ img, title, num, about }) => {
        return (
            <div className='info-card'>
                <div className="top">
                    <span>{img}</span>
                    <span>{title}</span>
                </div>

                <div className="bottom">
                    <span>{num}</span>
                    <span>{about}</span>
                </div>
            </div>
        );
    },

    cardInfo = [
        {
            img: <ActiveContributors />,
            title: "active contributors",
            num: "564.1k",
            about: "members",
        },
        {
            img: <RegisteredDAO />,
            title: "registerd DAO's",
            num: "540+",
            about: "organisations",
        },
        {
            img: <ActiveProposalsCard />,
            title: "active proposals",
            num: "115.3k",
            about: "proposals",
        },
    ],


    UIcard = () => {
        return (
            <section className='ui-cards'>
                <div>

                    <div className="top">
                        {
                            cardInfo.map((card, index) => {
                                const { img, title, num, about } = card;

                                return (
                                    <InfoCard key={index} img={img} title={title} num={num} about={about} />
                                );
                            })
                        }
                    </div>

                    <div className="bottom">

                        <h2>on chain voting model</h2>

                        <p>Promoting community engagement in DAO decision making and governance</p>

                        <div>
                            <div>
                                <span><Search /></span>
                                <input type="text" placeholder='Search for proposals, voting polls' />
                            </div>

                            <button>search</button>
                        </div>

                        <figure>
                            <img src="/circle.png" />
                        </figure>
                        <figure>
                            <img src="/circle.png" />
                        </figure>
                        <figure>
                            <img src="/circle.png" />
                        </figure>

                    </div>
                </div>
            </section>
        );
    };

export default UIcard;