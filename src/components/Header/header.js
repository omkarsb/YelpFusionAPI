import React, {Component} from 'react'
import './header.css'

export default class Header extends Component{
    render(){
        return(
            <div className="HeaderMainDiv">
                <div className="HeaderTabs">
                    <div className="HeaderTab">PortFolio</div>
                    <div className="HeaderTab">
                        <a href="">Resume</a>
                    </div>
                    <div className="HeaderTab">
                        <a href="https://about.me/omkarsawantbhosle">About</a>
                    </div>
                    <div className="HeaderTab">Projects</div>
                </div>
            </div>
        )
    }
}