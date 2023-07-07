import React from 'react'
import home from "../../assets/home.png"
import search from "../../assets/search.png"
import setting from "../../assets/settings.png"
import bell from "../../assets/bell.png"
import right from "../../assets/right.png"

import "./Topnav.css"

function Topnav() {
    return (
        <div className='topNav'>
            <div>
                <div><img src={home} alt="" srcset="" /></div>
                <div><img className='right' src={right} alt="" srcset="" /></div>
                <div>Settings</div><div><img src={right} className='right' alt="" srcset="" /></div>
                <div className='current'>Domains</div>
            </div>
            <div>
                <div><img src={search} alt="" srcset="" /></div>
                <div><img src={setting} alt="" srcset="" /></div>
                <div><img src={bell} alt="" srcset="" /></div>
                <div><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.08">
                        <rect x="0.375" y="0.375" width="39.25" height="39.25" rx="19.625" stroke="#101828" stroke-width="0.75" />
                    </g>
                </svg>
                </div>
            </div>
        </div>
    )
}

export default Topnav