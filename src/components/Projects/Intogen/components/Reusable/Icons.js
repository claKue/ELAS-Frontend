import React from 'react';
import { IconContext } from "react-icons";
import { FaGithub, FaYoutube } from "react-icons/fa";
import './Icons.css';

export default function Icons() {
    return(
        <div className="links">
            <div class="link">
                <div class="icon">
                    <a className="hoverLink" href="https://www.youtube.com/watch?v=9O9Os2UsS_o">
                        <IconContext.Provider value={{ className: "youtubeIcon" }}>
                            <div>
                                <FaYoutube/>
                            </div>
                        </IconContext.Provider>
                    </a>
                </div>
                <div class="textIcons">
                    <h4>Link to Youtube</h4>
                </div>
            </div>

            <div class="link">
                <div class="icon">
                    <a className="hoverLink" href="https://github.com/claKue/ELAS-Frontend">
                        <IconContext.Provider value={{ className: "githubIcon" }}>
                            <div>
                                <FaGithub/>
                            </div>
                        </IconContext.Provider> 
                    </a>
                </div>
                <div class="textIcons">
                    <h4>Link to GitHub</h4>
                </div>
            </div>
        </div>
    )
}