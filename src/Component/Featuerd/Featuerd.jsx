import React from 'react'
import "./Featuerd.css"

export default function Featuerd() {
    return (
        <div className="featuerd">
            <div className="featuerdItem">
                <span className="featuerdTitle">Revanue</span>
                <div className="featuerdContainer">
                    <span className="featuerdMony">$4,415</span>
                    <span className="featuerdMonyRate">-1.4<i class="fas fa-arrow-down negative"></i></span>
                </div>
                <span className="featuerdSub">Compared to last month</span>
            </div>

            <div className="featuerdItem">
                <span className="featuerdTitle">Sales</span>
                <div className="featuerdContainer">
                    <span className="featuerdMony">$2,415</span>
                    <span className="featuerdMonyRate">-11.4<i class="fas fa-arrow-down negative"></i></span>
                </div>
                <span className="featuerdSub">Compared to last month</span>
            </div>

            <div className="featuerdItem">
                <span className="featuerdTitle">Cost</span>
                <div className="featuerdContainer">
                    <span className="featuerdMony">$2,225</span>
                    <span className="featuerdMonyRate">-2.4<i class="fas fa-arrow-up"></i></span>
                </div>
                <span className="featuerdSub">Compared to last month</span>
            </div>
        </div>
    )
}
