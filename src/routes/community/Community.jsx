import { ArrowRight, CommunityIcon } from '../../assets/icons';
import { communities } from "../../assets/data";
import './community.scss';


const Community = () => {
    const
        TOTAL_DAO = 540,

        Dao = ({ img, title, comment, members }) => {
            return (
                <article className='dao'>
                    <div>
                        <img src={img} />
                    </div>

                    <div>
                        <span>{title}</span>
                        <span>{comment}</span>
                    </div>

                    <div>
                        <span><CommunityIcon /></span>
                        <span>{members}</span>
                        members
                    </div>
                </article>
            );
        };

    return (
        <section className="community">
            <div>
                <div className="top">
                    <h2>
                        Top DAO's
                        <span>({TOTAL_DAO}+)</span>
                    </h2>

                    <div>
                        <span>view all</span>
                        <span><ArrowRight /></span>
                    </div>
                </div>

                <div className="bottom">
                    {
                        communities.map((dao) => {
                            return (
                                <Dao key={dao.id} {...dao} />
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Community;