import { E404 } from '../../assets/icons';
import { Link } from 'react-router-dom';
import './error.scss';

import { gsap } from 'gsap';
import { useEffect } from 'react';
import Media from 'react-media';
import SplitType from 'split-type';


const Error = () => {

    useEffect(() => {
        const
            one = new SplitType("#one"),
            two = new SplitType("#two"),
            moveEl = document.querySelector('#move');

        gsap.to(".char", {
            y: 0,
            stagger: .075,
            delay: 2.5,
            duration: .1
        });


        moveEl.addEventListener("mousemove", (event) => {
            const
                speed = moveEl.getAttribute("data-speed"),
                x = (window.innerWidth - event.pageX * speed) / 100,
                y = (window.innerHeight - event.pageY * speed) / 100;

            moveEl.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }, []);


    return (
        <section className="error">
            <div className="move-con" data-speed={2} id='move'>
                <E404 />
            </div>

            <div className="links">
                <Media query={`(min-width:768px)`}>
                    {
                        matches => {
                            return matches ?
                                <p>
                                    <span id='one'>you seem lost fren...</span><Link id='two'>go home</Link>
                                </p>
                                :
                                <article>
                                    <h2>oops! mobile support not found.</h2>
                                    <p>try devices above 768px screen width. eg iPad, nest hub, etc...</p>
                                </article>
                                ;
                        }
                    }
                </Media>
            </div>
        </section>
    );
};

export default Error;