import React from 'react';
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import './Icons.css';

export default function Icons() {
    return(
        <div className="links">
                    <div class="link">
                            <div class="icon">
                                <a className="hoverLink" href="http://www.youtube.de">
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
                                <a className="hoverLink" href="https://circleci.com/integrations/github/">
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