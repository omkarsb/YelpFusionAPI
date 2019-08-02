import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile } from '@fortawesome/free-solid-svg-icons'

import './header.css'

export default class Header extends Component{
    render(){
        return(
            <div className="HeaderMainDiv">
                <div className="HeaderTabs">
                    <div className="HeaderTab">
                    </div>
                    <div className="HeaderTab">
                        <a href="https://drive.google.com/file/d/1tfQqk8gI5Z7wpEzJH0NzTWn0LdjxoIHl/view?usp=sharing" target="_blank">
                            <FontAwesomeIcon icon={faFile} size="lg" color="#333333"/>
                        </a>
                    </div>
                    <div className="HeaderTab">
                        <a href="https://about.me/omkarsawantbhosle" target="_blank"><img height="20px" width="110px" src={require("../../img/aboutme_logo_1024.png")} alt="lost and found"/></a>
                    </div>
                </div>
            </div>
        )
    }
}