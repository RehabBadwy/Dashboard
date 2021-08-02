import React from 'react'
import "./Topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topWraper">
                <div className="topLeft">
                    <span className="logo">Admin</span>
                </div>
                <div className="topRight">
                    <div className="topIconContainer">
                    <i class="fas fa-bell"></i>
                    <span className="topIconBag">2</span>
                    </div>

                    <div className="topIconContainer">
                    <i class="fas fa-globe"></i>
                    <span className="topIconBag">2</span>
                    </div>

                    <div className="topIconContainer">
                    <i class="fas fa-cog"></i>
                    </div>

                </div>
            </div>
        </div>
    )
}
