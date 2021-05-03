import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import logo from '../../homeLogo.jpg';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassHalf, faFutbol, faMars, faVenus } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import youtube from '../../YouTube.png';
import twitter from '../../Twitter.png';

const Details = () => {

    const {id} = useParams();

    const [teamInfo, setTeamInfo] = useState([])

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
        .then(res => res.json())
        .then(teamData => setTeamInfo(teamData.teams[0]))
    }, [id])

    console.log(teamInfo);
    
    const { strTeamBadge, strTeam, intFormedYear, strSport, strGender, strDescriptionEN, strYoutube, strTwitter} = teamInfo;

    const boyImg = `https://guardian.ng/wp-content/uploads/2018/04/Real-Madrid-6-963x598.jpg`;

    const girlImg = `https://thesetpieces.com/wp-content/uploads/2018/05/Afghan-WNT-vs-Jordan-2018.jpg`

    const maleIcon = <FontAwesomeIcon className="fontIcon" icon={faMars} />
    const femaleIcon = <FontAwesomeIcon className="fontIcon" icon={faVenus} />

    const img = strGender==="Male" ? boyImg : girlImg;
    const genderIcon = strGender==="Male" ? maleIcon : femaleIcon;

    

    return (
        <div>
            <img className="homeimg" src={logo}></img>
            <img className="head" src={strTeamBadge}/>
            <div responsive="sm" className="infoBox d-flex justify-content-around">

                <div className="clubInfo">
                    <h3><span className="clubTitle">{strTeam}</span></h3>
                    <p>Found        : {intFormedYear} <FontAwesomeIcon className="fontIcon" icon={faHourglassHalf} /></p>
                    <p>Sport Type   : {strSport} <FontAwesomeIcon className="fontIcon" icon={faFutbol} /></p>
                    <p>Gender       : {strGender} {genderIcon} </p>
                </div>
                <div className="clubImg">
                    <img src={img} alt=""/>
                </div>
            </div>
            <div className="description">
                <p> {strDescriptionEN} </p>
            </div>

            <div className="iconSet d-flex justify-content-center">
                <a href={`https://${strYoutube}`} target="_blank"><img src={youtube} alt=""/></a>
                <a href={`https://${strTwitter}`} target="_blank"><img src={twitter} alt=""/></a>
            </div>

        </div>
    );
};

export default Details;