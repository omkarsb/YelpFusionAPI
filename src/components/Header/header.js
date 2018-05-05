import React, {Component} from 'react'
import './header.css'

export default class Header extends Component{
    render(){
        return(
            <div className="HeaderMainDiv">
                <div className="HeaderTabs">
                    <div className="HeaderTab">PortFolio</div>
                    <div className="HeaderTab">Resume</div>
                    <div className="HeaderTab">About</div>
                    <div className="HeaderTab">Projects</div>
                </div>
            </div>
        )
    }
}