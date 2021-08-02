import React from 'react'
import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sideTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem active">
                        <i class="fas fa-home">Home</i>
                        </li>

                        <li className="sidebarItem">
                        <i class="fas fa-poll">Sales</i>
                        </li>

                        <li className="sidebarItem">
                        <i class="fas fa-clock">Time</i>
                        </li>
                    </ul>

                    <h3 className="sideTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem" >
                        <i class="fas fa-user">User</i>
                        </li>

                        <li className="sidebarItem">
                        <i class="fas fa-store">Products</i>
                        </li>

                        <li className="sidebarItem">
                        <i class="fas fa-info-circle">Report</i>
                        </li>

                        <li className="sidebarItem">
                        <i class="fas fa-dollar-sign">Transaction</i>
                        </li>
                    </ul>

                    <h3 className="sideTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem" >
                        <i class="fas fa-envelope">Mail</i>
                        </li>

                        <li className="sidebarItem">
                        <i class="fas fa-comment-dots">Feedback</i>
                        </li>

                        <li className="sidebarItem">
                        <i class="fas fa-envelope">Message</i>
                        </li>
                    </ul>

                    <h3 className="sideTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarItem" >
                        <i class="fas fa-briefcase">Mange</i>
                        </li>

                        <li className="sidebarItem">
                        <i class="fas fa-info-circle">Report</i>
                        </li>

                        <li className="sidebarItem">
                        <i class="fas fa-poll">Sales</i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
