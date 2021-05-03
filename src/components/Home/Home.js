import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import logo from '../../homeLogo.jpg';
import { Card, CardDeck, Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
    const {team} = props;

    let history = useHistory();

    const showDetails = id => {
        const url = `/details/${id}`;
        history.push(url);
    }

    return (
        <div>
            <img className="homeimg" src={logo}></img>
            <div>
                <h1 className="title">SPORTS FREAK</h1>
                <Container>
                    <Row>
                        {
                        team.map(team => (
                        <Col xs="sm-4">
                            <Box>
                                <div className="cardsection">
                                    <img src={team.strTeamJersey}></img>
                                    <h3><strong>Name : {team.strTeam}</strong></h3>
                                    <h5>Sports Type : {team.strSport}</h5>
                                    <Button variant="primary" size="lg" onClick={ () => showDetails(team.idTeam)}>Club Details <FontAwesomeIcon className="fontIcon" icon={faChevronRight} /></Button>
                                </div>
                            </Box>
                        </Col>
                        )
                        )
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

const Box = props => <div className="box">{props.children} </div>;

export default Home;