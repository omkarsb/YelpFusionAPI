import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faHome, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './header.css'

export default class Header extends Component{
    render(){
        return(
            <div className="HeaderMainDiv">
                <div className="HeaderTabs">

                    <div className="HeaderTabs__onLeft">
                        <div className="HeaderTabs__onLeft__Logo">
                            <img className="HeaderTabs__onLeft__Logo__Icon" src={require('../../img/footerlogo.png')} />
                        </div>
                    </div>

                    <div className="HeaderTabs__onRight">
                        <div className="HeaderTab__Home">
                            <Link to="/home">
                                <FontAwesomeIcon icon={faHome} size="2x" color="#333333"/>
                            </Link>
                        </div>
                        <div className="HeaderTab__Portfolio">
                            <Link to="#">
                                <FontAwesomeIcon icon={faProjectDiagram} size="2x" color="#333333"/>
                            </Link>
                        </div>
                        <div className="HeaderTab__LinkedIn">
                            <a href="https://www.linkedin.com/in/omkar-s-73345782/" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" color="#333333"/>
                            </a>
                        </div>
                        <div className="HeaderTab__Github">
                            <a href="https://github.com/omkarsb" target="_blank">
                                <FontAwesomeIcon icon={faGithub} size="2x" color="#333333"/>
                            </a>
                        </div>
                        <div className="HeaderTab__Resume">
                            <a href="https://drive.google.com/file/d/1tfQqk8gI5Z7wpEzJH0NzTWn0LdjxoIHl/view?usp=sharing" target="_blank">
                                <FontAwesomeIcon icon={faFile} size="2x" color="#333333"/>
                            </a>
                        </div>
                        <div className="HeaderTab_aboutMe">
                            <a href="https://about.me/omkarsawantbhosle" target="_blank"><img height="20px" width="110px" src={require("../../img/aboutme_logo_1024.png")} alt="lost and found"/></a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}