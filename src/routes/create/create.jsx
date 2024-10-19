import { CreateProposal, ToggleOff, ToggleOn } from '../../assets/icons';
import './create.scss';

// import { useForm } from "react-hook-form";
import { useState } from 'react';

const Create = () => {
    // console.log(useForm());


    // const { register, control } = useForm();

    const
        [activated, setActivated] = useState(false),

        [request, setRequest] = useState({

            // questions
            q1: "",
            q2: "",
            q3: "",

            // eligibility
            e1: "",
            e2: "",
            e3: "",

            // adddress
            address: "",

            // dates
            start_d: "",
            start_m: "",
            start_y: "",

            end_d: "",
            end_m: "",
            end_y: "",
        }),

        handleChange = (event) => {
            const { name, value, checked, type, } = event.target;
            setRequest(function (previous) {
                return ({
                    ...previous,
                    [name]: type === "checkbox" ? checked : value,
                });
            });
        };

    const { q1, q2, q3, e1, e2, e3, address, start_d, start_m, start_y, end_d, end_m, end_y } = request;

    

    return (
        <section className="create">
            <div>
                <div className="top">
                    <span><CreateProposal /></span>

                    <h2>
                        Create proposal
                    </h2>

                    <div>
                        <span>activate</span>

                        <span onClick={() => setActivated(!activated)}>
                            {activated ? <ToggleOn /> : <ToggleOff />}
                        </span>
                    </div>
                </div>

                <div className="bottom">
                    <article>

                        <div>
                            <span>image</span>

                            <h5>
                                playtest feedback
                            </h5>
                        </div>

                        <span>
                            <input
                                name="q1"
                                type="text"
                                value={q1}
                                onChange={handleChange}
                                placeholder="The game is ready to be launched in mainnet"
                            />
                        </span>
                        <span>
                            <input
                                name='q2'
                                value={q2}
                                type="text"
                                onChange={handleChange}
                                placeholder="The game needs another iteration in beta"
                            />
                        </span>
                        <span>
                            <input
                                name='q3'
                                value={q3}
                                type="text"
                                onChange={handleChange}
                                placeholder="The game should be launched but in private beta" />
                        </span>
                    </article>

                    <article>
                        <h5>
                            eligibility
                        </h5>

                        <div>
                            <input
                                name="e1"
                                value={e1}
                                type="text"
                                onChange={handleChange}
                                placeholder="To be qualified to vote on this proposal, DAO member must have our native token"
                            />
                            <input
                                name="e2"
                                value={e2}
                                type="text"
                                onChange={handleChange}
                                placeholder="Must have played our game over time and is familiar with crypto"
                            />
                            <input
                                name="e3"
                                value={e3}
                                type="text"
                                onChange={handleChange}
                                placeholder="It is advised but not mandatory to have prior gaming experience"
                            />
                        </div>
                    </article>

                    <article>
                        <h5>
                            Provide token Contract address below to authenticate each holder, if it’s a criteria  to vote
                        </h5>

                        <input
                            type="text"
                            name='address'
                            value={address}
                            onChange={handleChange}
                            placeholder="Contract address"
                        />
                    </article>

                    <article>
                        <div>
                            <h5>start date</h5>

                            <div>
                                <input type="text"
                                    placeholder='dd'
                                    name='start_d'
                                    value={start_d}
                                    onChange={handleChange} />
                                /
                                <input type="text"
                                    placeholder='mm'
                                    name='start-month'
                                />
                                /
                                <input type="text"
                                    placeholder='yy'
                                    name='start-year'
                                />
                            </div>
                        </div>

                        <div>
                            <h5>end date</h5>

                            <div>
                                <input type="text" placeholder='dd' />
                                /
                                <input type="text" placeholder='mm' />
                                /
                                <input type="text" placeholder='yy' />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Create;