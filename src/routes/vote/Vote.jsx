import { ArrowLeft, Unchecked, Checked } from '../../assets/icons';
import { useParams, Link } from 'react-router-dom';
import { cards } from '../../assets/data';
import './vote.scss';

import { useEffect, useState } from 'react';

const Vote = () => {

    const
        { id: daoID } = useParams(),

        dao = cards.find((proposal) => proposal.id === Number(daoID)),

        { img, title, status: { active }, vote: { count, proposals } } = dao,

        [cast, setCast] = useState({
            answer: "",
            comment: "",
        }),

        handleChange = (event) => {
            const { name, value, checked, type, } = event.target;

            setCast(function (previous) {
                return ({
                    ...previous,
                    [name]: type === "checkbox" ? checked : value
                });
            });
        };

    active && useEffect(() => {
        const textarea = document.querySelector("#comment");
        textarea.addEventListener("keyup", event => {
            textarea.style.height = `50px`;
            textarea.style.height = `${event.target.scrollHeight}px`;
        });
    }, []);

console.log(cast);

    return (
        <section className="vote">
            <div>
                <div className="top">
                    <span>
                        <Link to={"/explore"}>
                            <ArrowLeft />
                        </Link>
                    </span>

                    <h2>Vote on Proposal</h2>
                </div>

                <div className="bottom">
                    <div className="top">
                        <div className="left">
                            <span>
                                <img src={img} />
                            </span>

                            <h5>{title}</h5>
                        </div>

                        <div className="right">
                            <span>voters</span>

                            <div>
                                <span>{count}</span>
                                <span>total votes</span>
                            </div>

                            <span>{active ? "active" : "ended"}</span>
                        </div>
                    </div>

                    <div className="center">
                        <ul>
                            {
                                proposals.map((questions, index) => {
                                    const { q, v, c } = questions;

                                    return (
                                        <li key={index}>
                                            <label htmlFor={`question-${index + 1}`}>
                                                <span>
                                                    <input
                                                        type="radio"
                                                        name="answer"
                                                        id={`question-${index + 1}`}
                                                        value={q}
                                                        onChange={handleChange}
                                                        checked={cast.answer == `${q}`}
                                                    />

                                                    {active && <Checked />}
                                                    {active && <Unchecked />}
                                                </span>

                                                <div>
                                                    <div className="top">
                                                        <span>{q}</span>
                                                        <span><b>{v}</b> votes</span>
                                                    </div>

                                                    <div className="bottom">
                                                        <span>
                                                            <span style={{ width: v, background: "#" + c }}></span>
                                                        </span>
                                                    </div>
                                                </div>

                                            </label>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="bottom">
                        {
                            active && <div>
                                <textarea
                                    type="text"
                                    placeholder='Add Comments (optional)'
                                    name="comment"
                                    id="comment"
                                    value={cast.comment}
                                    onChange={handleChange}
                                />
                            </div>
                        }

                        <button>
                            {
                                active
                                    ?
                                    <Link>
                                        submit vote
                                    </Link>
                                    :
                                    <Link>
                                        view active proposals
                                    </Link>
                            }
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Vote;