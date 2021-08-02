import React from 'react'
import Featuerd from '../../Component/Featuerd/Featuerd'
import Chart from '../../Component/Chart/Chart'
import { userData } from '../../Data'
import "./Home.css"
import WidgetStm from '../../Component/WidgetStm/WidgetStm'
import WidgetLg from '../../Component/WidgetLg/WidgetLg'
export default function Home() {
    return (
        <div className="home">
            <Featuerd />
            <Chart data={userData} title="User Analytics" drid dataKey="Active User"/>
            <div className="homecon">
                <WidgetStm />
                <WidgetLg />
            </div>
        </div>
    )
}
