import React from 'react';
import * as BsIcon from "react-icons/bs";
import * as GiIcon from "react-icons/gi"; 

export const NavBarData = [
    {
        title: 'Customize',
        path: '/customize',
        icon: <GiIcon.GiWeightLiftingUp/>,
        className:"burger__path"
    },
    {
        title: 'Shuffle',
        path: '/shuffle',
        icon: <BsIcon.BsShuffle />,
        className:"burger__path"
    },
    {
        title: 'Saved',
        path: '/Saved',
        icon: <GiIcon.GiSaveArrow />,
        className:"burger__path"
    },
    {
        title: 'Progress',
        path: '/progress',
        icon: <BsIcon.BsCalendar />,
        className:"burger__path"
    },
]
